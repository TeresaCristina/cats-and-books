var template_two = document.getElementById('blog-entry-template-poirot-one').innerHTML;
var compiled_template_two = Handlebars.compile(template_two);

var rendered_two = compiled_template_two(
    {
        bookPoirot: [

            {
                title: poirot[0].title,
                cover: apiBookCovers + poirot[0].cover,
                linkBook: poirot[0].linkBook,
                imdb: poirot[0].imdb,
                tv: poirot[0].tv,
                reviewOne: fullPawBlack,
                reviewTwo: fullPawBlack,
                reviewThree: fullPawBlack,
                reviewFour: fullPawBlack,
                reviewFive: emptyPawBlack
            },
            {
                title: poirot[1].title,
                cover: apiBookCovers + poirot[1].cover,
                linkBook: poirot[1].linkBook,
                imdb: poirot[1].imdb,
                tv: poirot[1].tv,
                reviewOne: fullPawBlack,
                reviewTwo: fullPawBlack,
                reviewThree: fullPawBlack,
                reviewFour: emptyPawBlack,
                reviewFive: emptyPawBlack
            },
        ],
    });


//Overwrite the contents of #target with the renderer HTML
document.getElementById('book-entry-poirot').innerHTML = rendered_two;
