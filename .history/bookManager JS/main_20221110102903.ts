import {Book} from "./Book";

let book1 = new Book('The Design of EveryDay Things','Don Norman', false);
let book2 = new Book('The Most Human Human','Brian Christian', true);
let books: Book[] = [];
books.push(book1, book2);