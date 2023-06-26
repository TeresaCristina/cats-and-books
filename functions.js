const imagehref = "https://google.com"; 
const imagesrc = "https://media3.giphy.com/media/sIIhZliB2McAo/giphy.gif"; 

function update(className, property, value) {
  Array.from(document.getElementsByClassName(className)).forEach(elem => (elem[property] = value)) 
}

update("imagehref", "href", imagehref)
update("imagesrc", "src", imagesrc)