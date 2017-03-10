import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from "./book-list.component";
import {BookService} from "./book.service";
import {BookDetailComponent} from "./book-detail.component";
const bookRoutes: Routes = [
  {
    path: 'books',
    component: BookListComponent,
  },{
    path: 'books/:id',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(bookRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    BookService
  ]
})
export class BookRoutingModule { }
