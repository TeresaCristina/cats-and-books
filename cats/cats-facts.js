//GIVES A CAT FACT

const errMessageCats = "This is supposed to be a fact about cats. But something happened...maybe it was a cat...";

fetch(apiCatFacts).then(response => {
    return response.json();
}).then(data => document.getElementById("cat-fact").innerHTML = data.fact
).catch(err => document.getElementById("cat-fact").innerHTML = errMessageCats
);