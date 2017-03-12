export class Book {

    id : number ;
    title: string;
    author: string;
    date: string;
    image: string;
    sequence_i: number;
    genre_s: string;
    inStock: boolean;
    price: number;
    starRating: number;
    pages_i: number;
  constructor( id,title, author,date,image, sequence_i,
  inStock, genre, price,starRating,pages_i){
    this.id=id;
    this.title=title;
    this.author=author;
    this.date=date;
    this.image=image;
    this.sequence_i=sequence_i;
    this.inStock=inStock;
    this.genre_s=genre;
    this.price=price;
    this.starRating=starRating;
    this.pages_i=pages_i;

  }

  toString(){
    return "Book {id="+this.id+", author:"+this.author+"'genre':"+this.genre_s+" }";
  }


}

