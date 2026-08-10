function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("Must use 'new' when creating a new instance")
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    let info = title + " by " + author + ", " + pages + " pages" + ", " + read; 
}