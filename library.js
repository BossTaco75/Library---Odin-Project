// Book Constructor 
function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("Must use 'new' when creating a new instance");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

    this.info = title + " by " + author + ", " + pages + " pages" + ", " + read;
}

const library = [];  //"Library" array of Books 

// Constructs a book and adds to library
function addBooktoLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    library.push(book);
}


// Inserts Book info into table 
function dispalyBookInfo() {
    const tableBody = document.getElementById("product-table-body");

    let tableRowsHTML = "";

    library.forEach(book => {
        tableRowsHTML += `
        <tr>
            <td>${book.info}</td>
        </tr> 
    `;
    });

    tableBody.innerHTML = tableRowsHTML;
}

const form = document.getElementById('addBookForm');

const dialog = document.getElementById("getDialog");
const openBtn = document.getElementById("openDialog");
const closeBtn = document.getElementById("closeDialog");

openBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());

document.addEventListener("DOMContentLoaded", dispalyBookInfo); //listens for when the pages finishes loading and calls displayBookInfo

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const readCheckBox = document.getElementById('boolRead');
    const readStatus = readCheckBox?.checked ? "already read" : "not read yet";

    addBooktoLibrary(formData.get('bookTitle'), formData.get('bookAuthor'), formData.get('bookPages'), readStatus);
    dispalyBookInfo()
    
    form.reset();
    dialog.close();
});

