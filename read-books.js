var template_four = document.getElementById('blog-entry-template-four').innerHTML;


var template_three = '<div class="w3-card-4 w3-white w3-margin w3-padding">'+
                        '{{#each book as |book|}}'+
                            '<img src="{{book.cover}}" class="w3-left w3-margin-right" style="width:60px">'+
                            '<p><img src="{{book.flag}}" style="width:10%"><b>&nbsp;&nbsp;{{book.country}}</b></p>'+
                            '<p> <i> <a href="{{book.linkTitle}}" target="_blank">{{title}}</a></i> by {{author}}</p>'+
                        '{{/each}}'+
                    '</div>';
   

var compiled_template_three = Handlebars.compile(template_three);
var compiled_template_four = Handlebars.compile(template_four);

var rendered_three = compiled_template_three(
    {
        book: [

            {
                flag: apiFlag + countries[2].code + ".png",
                country: countries[2].name,
                linkTitle: urlAmazon + "So-Vast-Prison-Novel-English-ebook/dp/B00541YDJ4/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=",
                title: "So Vast the Prison",
                descriptionLink: "https://openlibrary.org/works/" + booksId[2],
                cover: apiBookCovers + coversId[2] + "-L.jpg",
                author: "Assia Djebar"
            },
        ],
    });

var rendered_four = compiled_template_four(
    {
        book: [

            {
                link: apiFlag + "AO.png",
                country: "Angola",
                linkTitle: urlAmazon + "As-mulheres-do-meu-pai-ebook/dp/B0BTMXKML5/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=",
                title: "As mulheres do meu pai",
                descriptionLink: apiBooks + booksId[4],
                imageBook: "images/angola-cover-bad.png",
            },
        ],
    });


document.getElementById('book-entry-three').innerHTML = rendered_three;
document.getElementById('book-entry-four').innerHTML = rendered_four;
