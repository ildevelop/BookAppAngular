import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from './book';
import {BookService} from "./book.service";
import {Observable} from "rxjs";

@Component({
    templateUrl: './book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
    pageTitle: string = 'Book Detail';
  id : number ;
  author: string;
  date: string;
  sequence_i: number;
  genre_s: string;
  inStock: boolean;
  price: number;
  starRating: number;
  pages_i: number;
  book: Book ;

    constructor(private _route: ActivatedRoute,
                private _router: Router, private bookService: BookService) {
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.book = this.getBook(id);
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['/books']);
    }
  getBook(id: number): Book {
    return this.bookService.getBook(id);
  }
}
