import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Book } from './book';


@Injectable()
export class BookService {
    private bookUrl = './assets/books.json';
    private books : Book[];
    constructor(private _http: Http) {}

    //the Observable class gives the list of books Injected to many places
    // we can use the values it injects to the service
    getBooks(): Observable<Book[]> {
        return this._http.get(this.bookUrl)
            .map((response: Response) => <Book[]> response.json())
            .do(data => this.books = data)
            .catch(this.handleError);
    }
    // error handler every exception or error will be logged to the console
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
  // find book by id that we initialized by the books array , in a production
  // environment we will send a backend request with id and the backend will fetch it
  // from the database
  getBook(id: number) : Book {
    return  this.books.find(book => book.id == id);
  }
}
