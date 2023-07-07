const apiLibrary = 'https://openlibrary.org/works/';
const authors = [
    "OL2645201A",
    "OL5499254A",
];
var apiAuthors = apiLibrary + authors[1] + '.json';
var errorMessage = "This is supposed to be the name of a person. But something happened...maybe it was a cat...";


fetch(apiAuthors).then(response => {
    return response.json();
}).then(data => {
    document.getElementById("book-authors").innerHTML = data.name
}
).catch(err => document.getElementById("book-authors").innerHTML = errorMessage
);