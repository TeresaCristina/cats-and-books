var template_two = '{{#each book as |book|}}' +
    '<div class="w3-card-4 w3-white w3-margin w3-padding">' +
    '<h5 class="w3-right-align"><b>{{book.country}}&nbsp;&nbsp;</b><img src="{{book.flag}}" style="width:10%"></h5>' +
    '<img src="{{book.cover}}" class="w3-left w3-margin-right" style="width:60px">' +
    '<p> <i><a href="{{book.linkTitle}}" target="_blank">{{title}}</a></i> by {{author}}</p>' +
    '<p>' +
    '<img src="{{book.firststar}}" style="width:7%">' +
    '<img src="{{book.secondstar}}" style="width:7%">' +
    '<img src="{{book.thirdstar}}" style="width:7%">' +
    '<img src="{{book.fourthstar}}" style="width:7%">' +
    '<img src="{{book.fifthstar}}" style="width:7%">' +
    '</p>' +
    '<div class="w3-dropdown-hover w3-white">' +
    '<p class="around-world-text-02 w3-right-align"><i><b>Read Review</b></i>&nbsp;&nbsp;</p>' +
    '<div class="w3-dropdown-content w3-card-4" style="width:300%">' +
    '<div class="w3-container">' +
    '<h6> INES: {{book.reviewInes}}<b style="display: inline-block; color: rgb(148, 21, 120)">&nbsp;&nbsp;{{book.starsInes}}</b> </h6>' +
    '<h6> TERESA: {{book.reviewTeresa}}<b style="display: inline-block; color: rgb(148, 21, 120)">&nbsp;&nbsp;{{book.starsInes}}</b> </h6>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '{{/each}}';

var compiled_template_two = Handlebars.compile(template_two);

var rendered_two = compiled_template_two(
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

document.getElementById('book-entry-two').innerHTML = rendered_two;