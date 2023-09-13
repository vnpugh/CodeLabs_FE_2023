// Exercise #7
// As a challenge, design a Library class. This class should be able to store book objects.
// For book objects, you should have a Book class. This class should have private fields for ISBN and public fields like title, author, and yearPublished.
// The Library should feature methods that allow a user to add a book, remove a book, and list all books.
// Implement this system and run a series of operations, such as adding a book, listing books, etc.
class Book {
    constructor(title, author, yearPublished, genre, ISBN) {
      this.title = title;
      this.author = author;
      this.yearPublished = yearPublished;
      this.genre = genre;
      this._ISBN = ISBN;
    }
  

  get ISBN() {
    return this._ISBN;
  }
}

class Library { // need a constructor that initializes an empty array
  constructor() {
    this.books = [];
  }

  // methods
  addBook(book) {
    if (book instanceof Book) { // used to check the type of an object at the run time.
      this.books.push(book);
      console.log(`Book Successfully Added: "${book.title}" by ${book.author} to the library.`);
    } else {
      console.error("Invalid/Book not found.");
    }
  }

  removeBook(ISBN) {
    const index = this.books.findIndex((book) => book.ISBN === ISBN);
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1)[0];
      console.log(`Book Removed: "${removedBook.title}" by ${removedBook.author} from the library.`);
    } else {
      console.error("Invalid/Book not found.");
    }
  }

  listBooks() {
    console.log("Library Catalog:");
    this.books.forEach((book) => {
      console.log(`"${book.title}" by ${book.author} (Year: ${book.yearPublished}, Genre: ${book.genre}, ISBN: ${book.ISBN})`);
    });
  }
}


const myLibrary = new Library();

const book1 = new Book("The Full Plate", "Ayesha Curry", 2018, "Cooking", "978-0-316-76948-0");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction", "978-0-06-112008-4");
const book3 = new Book("Things Fall Apart", "Chinua Achebe", 1994, "Fiction", "908-1-04-117708-9");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.listBooks();

myLibrary.removeBook("978-0-06-112008-4");
