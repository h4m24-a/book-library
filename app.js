const addbookbtn = document.getElementById("new-book-btn");
const form = document.getElementById("form");
const formwrap = document.getElementById("form-wrapper")
const readbtn = document.getElementById("readbtn")


let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  const newBook = new book("title, author, pages, read");
  myLibrary.push(newBook);
}

// Button to show book form
addbookbtn.addEventListener('click', displayForm);
function displayForm () {
    form.style.display = 'block';
}




// Change status - Read or Not
readbtn.addEventListener('click', function () {
    readbtn.textContent = 'Not Read';
  });