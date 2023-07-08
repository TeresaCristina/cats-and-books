var apiUrl = 'https://catfact.ninja/fact?max_length=140';
var errorMessage = "This is supposed to be a fact about cats. But something happened...maybe it was a cat...";

fetch(apiUrl).then(response => {
    return response.json();
}).then(data => document.getElementById("cat-fact").innerHTML = data.fact
).catch(err => document.getElementById("cat-fact").innerHTML = errorMessage
);