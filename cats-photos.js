var apiUrl = 'https://cataas.com/cat?html=true&json=true';
const urlImage = 'https://cataas.com';
var errorMessage = "This is supposed to be a cat image. But something happened...maybe it was a cat...";

fetch(apiUrl).then(response => {
  return response.json();
}).then(data => document.getElementById("cat-image").src = urlImage + data.url
).catch(err => document.getElementById("cat-image").innerHTML = errorMessage
);