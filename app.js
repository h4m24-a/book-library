const addbookbtn = document.getElementById("new-book-btn");
const form = document.getElementById("form");
const bookTable = document.getElementById("booktable")



let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
let title = document.getElementById("title").value
let author = document.getElementById("author").value
let pages = document.getElementById("pages").value
let read = document.getElementById("read").checked
let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(newBook)
}


function renderBook() {
  for (let i = 0; i < myLibrary.length; i ++) {
    bookTable.innerHTML += 
    `<tr> <td>${Book.title}</td> <td>${Book.author}</td> <td>${Book.title}</td> <td>${Book.author}</td> <td>${Book.pages}</td> <td>${Book.read}</td> </tr>`
}



}



document.querySelector("#addbook").addEventListener("submit", function(event){
  event.preventDefault();
  addBookToLibrary()
  console.log("button clicked")
})



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
