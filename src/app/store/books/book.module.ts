import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from "./book-list.component";
import {BookDetailComponent} from "./book-detail.component";
import {BookService} from "./book.service";
import {BookFilterPipe} from "./book-filter.pipe";
import {CommonModule} from "@angular/common";
import {BookRoutingModule} from "./book-routing.module";

import { FormsModule }  from '@angular/forms';
import {TitleFilterPipe} from "./title.pipe";
import {DateFilterPipe} from "./date-filter.pipe";




@NgModule({
  imports: [
    BookRoutingModule,
    CommonModule,
    FormsModule

  ],
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookFilterPipe,
    TitleFilterPipe,
    DateFilterPipe
  ]
})
export class BookModule { }

