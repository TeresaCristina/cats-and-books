const apiLibrary = 'https://openlibrary.org/works/';
const books = [
    "OL15611821W",
    "OL19980028W",
    "OL102370W"
];

var errorTitle = "This is supposed to be a book title. But something happened...maybe it was a cat...";
var errorDescription = "This is supposed to be a book description. But something happened...maybe it was a cat...";

fetch(apiBooks).then(response => {
    return response.json();
}).then(data => {
    document.getElementById("book-title").innerHTML = data.title
        document.getElementById("book-description").innerHTML = data.description.value
}
).catch(err => {
    document.getElementById("book-title").innerHTML = errorTitle,
        document.getElementById("book-description").innerHTML = errorDescription
}
);

