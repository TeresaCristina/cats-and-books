//GIVES A CAT IMAGE

const errMessageCatPhoto = "This is supposed to be a cat image. But something happened...maybe it was a cat...";

fetch(apiCatPhoto).then(response => {
  return response.json();
}).then(data => document.getElementById("cat-image").src = urlCatImage + data.url
).catch(err => document.getElementById("cat-image").innerHTML = errMessageCatPhoto
);