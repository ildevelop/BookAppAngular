import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BookService} from "./store/books/book.service";
import {AppRoutingModule} from "./app-routing.module";
import {BookModule} from "./store/books/book.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BookModule,
    HttpModule
  ],
  providers: [ BookService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
