let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value + " pages";
  let ele = document.getElementsByName("status");
  let status = "";
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      status += ele[i].value;
    }
  }
  let book1 = new Book(title, author, pages, status);
  myLibrary.push(book1);
  console.log(myLibrary);
  displayBook(title, author, pages, status);
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

let subButton = document.getElementById("subButton");
subButton.addEventListener("click", addBookToLibrary, false);

function displayBook(title, author, pages, status) {
  let book = document.createElement("div");
  let eleTitle = document.createElement("div");
  eleTitle.textContent = title;
  let eleAuthor = document.createElement("div");
  eleAuthor.textContent = author;
  let elePages = document.createElement("div");
  elePages.textContent = pages;
  let btn = document.createElement("button");
  btn.textContent = status;
  if (btn.textContent === "Read") {
    btn.setAttribute("id", "read");
  }
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  btn.addEventListener("click", changeStatus, false);
  delBtn.addEventListener("click", deleteBook);
  book.appendChild(eleTitle);
  book.appendChild(eleAuthor);
  book.appendChild(elePages);
  book.appendChild(btn);
  book.appendChild(delBtn);
  let shelf = document.getElementsByClassName("shelf")[0];
  shelf.appendChild(book);
  book.classList.add("book");
  btn.classList.add("status");
}

function changeStatus(event) {
  if (event.target.textContent === "Read") {
    event.target.textContent = "Not Read";
    event.target.removeAttribute("id");
  } else {
    event.target.textContent = "Read";
    event.target.setAttribute("id", "read");
  }
}

function deleteBook(event) {
  event.path[1].remove();
}
