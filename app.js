const addbookbtn = document.getElementById("new-book-btn");
const form = document.getElementById("form");
const bookTable = document.getElementById("booktable");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}



function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("readstatus").value;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function addBooksManually() {
  let book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 224, "Read");
  let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281, "Not Read");
  let book3 = new Book("1984", "George Orwell", 328, "Read");

  myLibrary.push(book1, book2, book3);
}

// Render the books in the table
function displayBooks() {
  addBooksManually();
  renderBooks();
}

// Call the displayBooks function to show the books in the table
displayBooks();




// Renders books
function renderBooks() {
  // Clear existing table rows after entering a new book
  while (bookTable.rows.length > 1) {
    bookTable.deleteRow(1);
  }

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let newRow = document.createElement("tr");

    newRow.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td><button class="read-button">${book.read}</button></td>
      <td><button class="remove-button">Remove</button></td>
    `;

    bookTable.appendChild(newRow);
  }
}



// Sumbit button on the form
document.getElementById("addbook").addEventListener("submit", function(event) {
  event.preventDefault();
  addBookToLibrary();
  clearForm();
  renderBooks();
});



// Clears form after book is submitted
function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("readstatus").value = "Read";
  form.style.display = "none";
}


// Hides and Displays form
addbookbtn.addEventListener("click", displayForm);
function displayForm() {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}



// Handles the actions of marking a book as read or not read and removing a book from the library, both triggered by clicking the buttons in the table rows.
bookTable.addEventListener("click", function(event) {
  if (event.target.classList.contains("read-button")) {
    let button = event.target;
    let bookRow = button.parentNode.parentNode;
    let rowIndex = bookRow.rowIndex - 1;
    let book = myLibrary[rowIndex];
    book.read = book.read === "Read" ? "Not Read" : "Read";
    renderBooks();
  } else if (event.target.classList.contains("remove-button")) {
    let button = event.target;
    let bookRow = button.parentNode.parentNode;
    let rowIndex = bookRow.rowIndex - 1;
    myLibrary.splice(rowIndex, 1);
    renderBooks();
  }
});
