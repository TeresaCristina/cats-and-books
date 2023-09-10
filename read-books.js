window.onload = function () {

    var template_three = document.getElementById('blog-entry-template-three').innerHTML;
    var template_four = document.getElementById('blog-entry-template-four').innerHTML;


    var compiled_template_three = Handlebars.compile(template_three);
    var compiled_template_four = Handlebars.compile(template_four);
    
    const apiFlagExtra = "https://www.countryflagicons.com/FLAT/64/";
    const amazonExtra = "https://www.amazon.com.br/";
    const apiBooks = 'https://openlibrary.org/works/';
    const apiCovers = "https://covers.openlibrary.org/b/id/";
    const booksId = [
        "OL15611821W",
        "OL19980028W",
        "OL102370W"
    ];
    const coversId = [
        "10383140",
        "11724780",
        "846698",
        "",
        ""

    ];
    


        var rendered_three= compiled_template_three(
            {  
                book: [
             
                    {
                        link: apiFlagExtra + "DZ.png",
                        country: "Algeria",
                        linkTitle: amazonExtra + "So-Vast-Prison-Novel-English-ebook/dp/B00541YDJ4/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=",
                        title: "So Vast the Prison",
                        descriptionLink: apiBooks + booksId[2],
                        imageBook: apiCovers + coversId[2] + "-L.jpg",
                        author: "Assia Djebar"
                    },
                ],
            });

            var rendered_four= compiled_template_four(
                {  
                    book: [
                 
                        {
                            link: apiFlagExtra + "AO.png",
                            country: "Angola",
                            linkTitle: amazonExtra + "As-mulheres-do-meu-pai-ebook/dp/B0BTMXKML5/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=" ,
                            title: "As mulheres do meu pai",
                            descriptionLink: apiBooks + booksId[4],
                            imageBook: "images/angola-cover-bad.png",
                        },
                    ],
                });


    document.getElementById('book-entry-three').innerHTML = rendered_three;
    document.getElementById('book-entry-four').innerHTML = rendered_four;
}