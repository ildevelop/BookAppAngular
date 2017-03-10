import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Book } from './book';
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class BookService {
    private bookUrl = './assets/books.json';
    private books : Book[];
    constructor(private _http: Http) {}

    getBooks(): Observable<Book[]> {
        return this._http.get(this.bookUrl)
            .map((response: Response) => <Book[]> response.json())
            .do(data => this.books = data)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

  getBook(id: number) : Book {
    return  this.books.find(book => book.id == id);
  }
}
