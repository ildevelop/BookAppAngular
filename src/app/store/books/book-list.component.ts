import {Component,OnInit, ViewChild, AfterViewChecked} from '@angular/core';

import { Book } from './book';
import { BookService } from './book.service';
import {NgForm} from "@angular/forms";
import {timeInterval} from "rxjs/operator/timeInterval";

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
    deleteBook(book: Book){
      let index =this.books.indexOf(book);
      this.books.splice(index, 1);

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
    this.newBook= new Book('111',"","","01-01-2017","",0,"","",0,0,0);
    // this.newBook.id=BookListComponent.counter;
    console.log("book="+this.newBook);
    }
  checkDate(date: Date): boolean {

    let result : boolean ;
    if(date) {
      result=this.validateDate(date);
    }else {
      result= false;
    }
    return result;
  }

  validateDate(date: Date):boolean {
    console.log("month="+date.getMonth()+"day="+date.getDay()+"year="+date.getFullYear());
    return date< new Date() && date.getMonth() <=12&&date.getMonth() >0&&
      date.getDay()<32&& date.getDay()>0 && date.getFullYear()<=new Date().getFullYear()&&
      date.getFullYear()>1700;
  }

}
