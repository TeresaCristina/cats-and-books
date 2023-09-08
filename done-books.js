var template_two = document.getElementById('blog-entry-template-two').innerHTML;


    //Compile the template
    var compiled_template_two = Handlebars.compile(template_two);


    const fullPaw = "full-paw.png";
    const emptyPaw = "empty-paw.png";
    const halfPaw = "half-paw.png";
    const talkPaw = "talk-paw.png";
    
    const apiFlagDone = "https://www.countryflagicons.com/FLAT/64/";
    const amazonDone = "https://www.amazon.com.br/";
    const apiBooks = "https://openlibrary.org/works/";
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
    
    //Render the data into the template
   
    var rendered_two= compiled_template_two(
        {  
            book: [
         
                {
                    link: apiFlagDone + "AL.png",
                    country: "Albania",
                    linkTitle: amazonDone + "Sworn-Virgin-English-Elvira-Dones-ebook/dp/B00IHH2NZI/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=R3IRWW4R66KL&keywords=sworn+virgin&qid=1688822302&s=digital-text&sprefix=sworn+virgin%2Cdigital-text%2C157&sr=1-1",
                    title: "Sworn Virgin",
                    descriptionLink: apiBooks + booksId[1],
                    imageBook: apiCovers + coversId[1] + "-L.jpg",
                    reviewInes: "Reading about other cultures is always an interesting experience, however, this wasn't the case in this book. Unfortunately, the author had a good idea, but her execution of it wasn't the best. The protagonist's reasons throughout the story felt shallow, with her path not making any sense at all in the end (at least not in the deep way the author was trying to convey).I learned a lit bit about Albania, though.",
                    starsInes: "2.5/5",
                    reviewTeresa: "The story can be confusing at times and the character doesn't seem to live in the real world. Disappointed with the ending because I found it unrealistic and unnecessary. For me, the author fails to create enough motivation to apply the tradition in such a radical way. I had a hard time sympathizing with the character. Good idea, bad execution. It's well written, though.",
                    starsTeresa: "3/5",
                    firststar: fullPaw, 
                    secondstar: fullPaw,
                    thirdstar: fullPaw,
                    fourthstar: emptyPaw,
                    fifthstar: emptyPaw,
                },
                {
                    link: apiFlagDone + "AF.png",
                    country: "Afghanistan",
                    linkTitle: amazonDone + "Patience-Stone-English-Atiq-Rahimi-ebook/dp/B00351YETO/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=",
                    title: "Patience Stone",
                    descriptionLink: apiBooks + booksId[0],
                    imageBook: apiCovers + coversId[0] + "-L.jpg",
                    reviewInes: "It's a short story and very well written. The author brought forth the perspective of a woman who comes from a very restrictive society in a very interesting and impressive way (especially if you consider the fact that he is a man). Besides that, I liked the plot idea and I think it was very well developed. My only problem was the ending, it made no sense with everything that was happening until that point (maybe if the author had finished the story some pages before that wouldn't have been a problem).",
                    starsInes: "4.5/5",
                    reviewTeresa: "This is an amazing journey through a woman's inner voice. Everything she is, her thoughts, feelings, and confusion about the rules of the world. How she connects her present with her past and makes decisions about the future. I didn't care much for the ending, though (it seemed like the author didn't know how to end). It left a mark on me. I will probably read it again in the future.",
                    starsTeresa: "4/5",
                    firststar: fullPaw, 
                    secondstar: fullPaw,
                    thirdstar: fullPaw,
                    fourthstar: fullPaw,
                    fifthstar: halfPaw,
                },
            ],
        });

        
    //Overwrite the contents of #target with the renderer HTML
    document.getElementById('book-entry-two').innerHTML = rendered_two;
