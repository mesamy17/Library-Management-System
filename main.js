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
    return this.name + "borrowed" + this.name;
  }

  returnBook(book) {
    return this.name + "returned" + this.book;
  }
}
