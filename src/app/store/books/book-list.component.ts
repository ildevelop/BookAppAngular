import {Component, OnInit, ViewChild, AfterViewChecked} from '@angular/core';

import { Book } from './book';
import { BookService } from './book.service';
import {NgForm} from "@angular/forms";

@Component({
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit ,AfterViewChecked {
    pageTitle: string = 'Book List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    book: Book;
    books: Book[];
    public static counter: number;
    newBook: Book;

    constructor(private bookService: BookService) {

    }
  bookForm: NgForm;
  @ViewChild('heroForm') currentForm: NgForm;

  ngAfterViewChecked() {
    // console.log("view changed");
  }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    //fetch the books from the service and initialize them to the books []
    ngOnInit(): void {
        this.bookService.getBooks()
                .subscribe(books => this.books = books,
                           error => this.errorMessage = <any>error);
        BookListComponent.counter=4;
        BookListComponent.counter++;
      this.initBook();
    }
    // delete the book from the array , in  production we will use
    // bookService to use DELETE request to the backend with body of id number
    deleteBook(id: number){
      this.books.splice(id-1, 1);
    }
    // updates the book from the array , in  production we will use
    // bookService to use PUT request to the backend with body of book entity
    editBook(book: Book, event:any){
      this.books[book.id-1] = book;
    }

    // creates the book and added the array , in  production we will use
    // bookService to use POST request to the backend with body of book entity
    createBook(book: Book, event:any) {
      console.log("created book="+book);
      this.books.push(book);
    }
    initBook(){
    this.newBook= new Book('111',"","","","",0,"","",0,0,0);
    // this.newBook.id=BookListComponent.counter;
    console.log("book="+this.newBook);
    }

}
