const apiLibraryAuthor = 'https://openlibrary.org/authors/';
const authors = [
    "OL2645201A",
    "OL5499254A",
    "OL29464A"
];
var apiAuthors = apiLibraryAuthor + authors[2] + '.json';
var errorMessage = "This is supposed to be the name of a person.";


fetch(apiAuthors).then(response => {
    return response.json();
}).then(data => {
    document.getElementById("book-authors").innerHTML = data.name
}
).catch(err => document.getElementById("book-authors").innerHTML = errorMessage
);