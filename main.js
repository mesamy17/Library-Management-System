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
    return this.name + "borrowed" + book.title;
  }

  returnBook(book) {
    return this.name + "returned" + book.title;
  }
}

class PremiumMember extends Member {
  constructor(name) {
    this.name = name;
  }

  reserveBook(book) {
    return "Premium Member " + this.name + " has reserved " + book.title;
  }
}
