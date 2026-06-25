class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class Member {
  constructor(name) {
    this.name = name;
  }

  borrowBook(book) {
    return this.name + " borrowed " + book.title;
  }

  returnBook(book) {
    return this.name + " returned " + book.title;
  }
}

class PremiumMember extends Member {
  constructor(name) {
    super(name);
  }

  reserveBook(book) {
    return "Premium Member " + this.name + " has reserved " + book.title;
  }
}

class Library {
  constructor() {
    this.Books = [];
  }
  addBook(book) {
    this.Books.push(book);
    return book.title + " added to library";
  }

  removeBook(isbn) {
    this.Books = this.Books.filter((book) => book.isbn != isbn);
    return "Removed book";
  }

  listBooks() {
    return this.Books;
  }
}

const b1 = new Book("Java Script", "Samarth Sawant", "001");
const b2 = new Book("Death Note", "Hikaru", "005");

let shelf = new Library();

console.log(shelf.addBook(b1));
console.log(shelf.addBook(b2));

console.log("Books in library");
console.log(shelf.listBooks());

const m1 = new Member("sam");

console.log(m1.borrowBook(b1));
console.log(m1.returnBook(b1));
