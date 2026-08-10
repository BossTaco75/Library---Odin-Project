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

let book1 = new Book("The book1", "author1", 1, "not read yet");
let book2 = new Book("The book2", "author2", 2, "already read");
let book3 = new Book("The book3", "author3", 3, "not read yet");

const library = [book1, book2, book3];

function addBooktoLibary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    library.push(book);
}

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

