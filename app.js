const addbookbtn = document.getElementById("new-book-btn");
const form = document.getElementById("form");
const formwrap = document.getElementById("form-wrapper");
const readbtn = document.getElementById("readbutton");
const removebtn = document.getElementById("removebtn");

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
addbookbtn.addEventListener("click", displayForm);

function displayForm() {
  if (form.style.display === 'none') {
    // this SHOWS the form
    form.style.display = 'block';
  } else {
    // this HIDES the form
    form.style.display = 'none';
  }
}

















// Change status - Read or Not
// readbtn.addEventListener('click', readStatus);

// function readStatus() {
//   if (readbtn.innerHTML === "Read") {
//     readbtn.innerHTML = "Not Read";
//   } else {
//     readbtn.innerHTML = "Read";
//   }
// }

