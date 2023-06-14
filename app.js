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


function renderBooks() {
  // Clear existing table rows after entering a new book
  while (bookTable.rows.length > 1) {
    bookTable.deleteRow(1);
  }

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let newRow = document.createElement("tr");

    let titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    newRow.appendChild(titleCell);

    let authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    newRow.appendChild(authorCell);

    let pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;
    newRow.appendChild(pagesCell);

    let readCell = document.createElement("td");
    let readButton = document.createElement("button");
    readButton.className = "read-button";
    readButton.textContent = book.read;
    readCell.appendChild(readButton);
    newRow.appendChild(readCell);

    let removeCell = document.createElement("td");
    let removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.textContent = "Remove";
    removeCell.appendChild(removeButton);
    newRow.appendChild(removeCell);

    bookTable.appendChild(newRow);
  }
}




document.getElementById("addbook").addEventListener("submit", function(event) {
  event.preventDefault();
  addBookToLibrary();
  clearForm();
  renderBooks();
});




function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("readstatus").value = "Read";
  form.style.display = "none";
}



addbookbtn.addEventListener("click", displayForm);

function displayForm() {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}




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
