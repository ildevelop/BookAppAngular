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
    book: Book;
    books: Book[];

    constructor(private bookService: BookService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    //fetch the books from the service and initialize them to the books []
    ngOnInit(): void {
        this.bookService.getBooks()
                .subscribe(books => this.books = books,
                           error => this.errorMessage = <any>error);
    }
    // delete the book from the array , in  production we will use
    // bookService to use DELETE request to the backend
    deleteBook(id: number){
      this.books.splice(id-1, 1);
    }
    // updates the book from the array , in  production we will use
    // bookService to use PUT request to the backend
    editBook(book: Book, event:any){
      this.books[book.id-1] = book;
    }

}
