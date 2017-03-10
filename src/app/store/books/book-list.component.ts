import { Component, OnInit } from '@angular/core';

import { Book } from './book';
import { BookService } from './book.service';

@Component({
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    pageTitle: string = 'Book List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    books: Book[];
    editBookBool: boolean= false;

    constructor(private bookService: BookService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.bookService.getBooks()
                .subscribe(books => this.books = books,
                           error => this.errorMessage = <any>error);
    }
  deleteBook(id: number){
      this.books.splice(id-1, 1);
  }
  editBook(id:number){

      if(this.bookService.getBooks()){

      }
  }


}
