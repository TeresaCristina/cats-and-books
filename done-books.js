var template_two = document.getElementById('blog-entry-template-two').innerHTML;
var compiled_template_two = Handlebars.compile(template_two);
       
var rendered_two= compiled_template_two(
        {  
            book: [
         
                {
                    flag: apiFlag + countries[1].code + ".png",
                    country: countries[1].name,
                    linkTitle: urlAmazon + amazonLink[1],
                    title: "Sworn Virgin",
                    descriptionLink: apiBooks + booksId[1],
                    cover: apiBookCovers + coversId[1] + "-L.jpg",
                    reviewInes: reviewsInes[1].review, 
                    starsInes: reviewsInes[1].paws,
                    reviewTeresa: reviewsTeresa[1].review, 
                    starsTeresa: reviewsTeresa[1].paws,
                    firststar: fullPaw, 
                    secondstar: fullPaw,
                    thirdstar: fullPaw,
                    fourthstar: emptyPaw,
                    fifthstar: emptyPaw,
                    author: "Elvira Dones"
                },
                {
                    flag: apiFlag + countries[0].code + ".png",
                    country: countries[0].name,
                    linkTitle: urlAmazon + amazonLink[0],
                    title: "Patience Stone",
                    descriptionLink: apiBooks + booksId[0],
                    cover: apiBookCovers + coversId[0] + "-L.jpg",
                    reviewInes: reviewsInes[0].review, 
                    starsInes: reviewsInes[0].paws,
                    reviewTeresa: reviewsTeresa[0].review, 
                    starsTeresa: reviewsTeresa[0].paws,
                    firststar: fullPaw, 
                    secondstar: fullPaw,
                    thirdstar: fullPaw,
                    fourthstar: fullPaw,
                    fifthstar: halfPaw,
                    author: "Atiq Rahimi"
                },
            ],
        });

        
    //Overwrite the contents of #target with the renderer HTML
    document.getElementById('book-entry-two').innerHTML = rendered_two;
