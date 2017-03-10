/**
 * Created by ilya on 02/02/2017.
 */
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {BookListComponent} from "./store/books/book-list.component";

const appRoutes: Routes = [
  {
    path: 'books',
    component: BookListComponent
    //,
    // loadChildren: 'app/store/books/book.module#BookModule',
    // data: { preload: true }
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
