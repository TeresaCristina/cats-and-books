window.onload = function () {
    //Grab the inline template
    //var template = document.getElementById('entry-template').innerHTML;
    var template = document.getElementById('blog-entry-template').innerHTML;
    
    //Compile the template
    var compiled_template = Handlebars.compile(template);
    const apiFlag = "https://www.countryflagicons.com/FLAT/64/";
    const amazon = "https://www.amazon.com.br/";
    //Render the data into the template
    var rendered = compiled_template(
        {  
            book: [
                {
                    link: apiFlag + "TR.png",
                    country: "Turkey",
                    linkTitle: amazon + "minutos-segundos-neste-mundo-estranho-ebook/dp/B094C54N3S/ref=sr_1_1?crid=5NZXI4HTJ3HX&keywords=10+minutos+e+38+segundos+neste+mundo+estranho&qid=1693473035&s=digital-text&sprefix=10+minutos+e+3%2Cdigital-text%2C189&sr=1-1", 
                    title: "10 minutos e 38 segundos neste mundo estranho",
                    reviewInes:"",
                    reviewTeresa:"",
                    firststar: "",
                    secondstar: "",
                    thirdstar: "",
                    fourthstar: "",
                    fifthstar: "",
                },
                {
                    link: apiFlag + "KR.png",
                    country: "South Korea",
                    linkTitle: amazon + "Kim-Jiyoung-nascida-em-1982-ebook/dp/B09SBLCYBF/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2LJIYFZCUDN4I&keywords=nascida+em+1982&qid=1693472677&sprefix=nascida+em+1982%2Caps%2C167&sr=8-1",
                    title: "Nascida em 1982",
                    reviewInes:"",
                    reviewTeresa:"",
                    firststar: "",
                    secondstar: "",
                    thirdstar: "",
                    fourthstar: "",
                    fifthstar: "",
                },
                {
                    link: apiFlag + "NG.png",
                    country: "Nigeria",
                    linkTitle: amazon + "garota-que-n%C3%A3o-calou/dp/655924010X/ref=sr_1_1?crid=3ICB4ZTIRD63A&keywords=a+garota+que+n%C3%A3o+se+calou&qid=1693473263&sprefix=a+garota+que+%2Caps%2C176&sr=8-1", 
                    title: "A garota que nao se calou",
                    reviewInes:"",
                    reviewTeresa:"",
                    firststar: "",
                    secondstar: "",
                    thirdstar: "",
                    fourthstar: "",
                    fifthstar: "",
                },
                {
                    link: apiFlag + "AT.png",
                    country: "Austria",
                    linkTitle: amazon + "Weight-Things-Marianne-Fritz/dp/0989760774/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=The+Weight+of+Things&qid=1693515889&sr=8-1",
                    title: "The Weight of Things",
                    reviewInes:"",
                    reviewTeresa:"",
                    firststar: "",
                    secondstar: "",
                    thirdstar: "",
                    fourthstar: "",
                    fifthstar: "",
                },
                {
                    link: apiFlag + "AU.png",
                    country: "Australia",
                    linkTitle: amazon + "",
                    title: "",
                    reviewInes:"",
                    reviewTeresa:"",
                    firststar: "",
                    secondstar: "",
                    thirdstar: "",
                    fourthstar: "",
                    fifthstar: "",
                },
                {
                    link: apiFlag + "AM.png",
                    country: "Armenia",
                    linkTitle: amazon + "Three-Apples-Fell-Sky-English-ebook/dp/B07XYFDLB8/ref=sr_1_1?keywords=Three+Apples+Fell+from+the+Sky&qid=1693503772&rnid=18726358011&s=digital-text&sr=1-1",
                    title: "Three Apples Fell from the Sky",
                    reviewInes:"",
                    reviewTeresa:"",
                    firststar: "",
                    secondstar: "",
                    thirdstar: "",
                    fourthstar: "",
                    fifthstar: "",
                },
                {
                    link: apiFlag + "AR.png",
                    country: "Argentina",
                    linkTitle: amazon + "Fever-Dream-English-Samanta-Schweblin-ebook/dp/B01IAUGBU4/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=G1GZUAC0N6US&keywords=Samanta+Schweblin+Fever+Dream&qid=1693503337&sprefix=samanta+schweblin+fever+dream%2Caps%2C203&sr=8-1",
                    title: "Fever Dream",
                    reviewInes:"",
                    reviewTeresa:"",
                    firststar: "",
                    secondstar: "",
                    thirdstar: "",
                    fourthstar: "",
                    fifthstar: "",
                },
                {
                    link: apiFlag + "AG.png",
                    country: "Antigua and Barbuda",
                    linkTitle: amazon + "Annie-John-English-Jamaica-Kincaid-ebook/dp/B09SG8DRKM/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=180IB1VU5RLJP&keywords=Annie+John%2C&qid=1693502977&rnid=5308307011&s=digital-text&sprefix=annie+john+%2Cdigital-text%2C199&sr=1-1",
                    title: "Annie John",
                    reviewInes:"",
                    reviewTeresa:"",
                    firststar: "",
                    secondstar: "",
                    thirdstar: "",
                    fourthstar: "",
                    fifthstar: "",
                },
                {
                    link: apiFlag + "AO.png",
                    country: "Angola",
                    linkTitle: amazon + "As-mulheres-do-meu-pai-ebook/dp/B0BTMXKML5/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=" ,
                    title: "As mulheres do meu pai",
                    reviewInes:"",
                    reviewTeresa:"",
                    firststar: "",
                    secondstar: "",
                    thirdstar: "",
                    fourthstar: "",
                    fifthstar: "",
                },
                {
                    link: apiFlag + "AN.png",
                    country: "Andorra",
                    linkTitle: amazon + "Andorra-Revealed-English-Clare-Allcard-ebook/dp/B01ALT3CAO/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=" ,
                    title: "Andorra Revealed",
                    reviewInes:"",
                    reviewTeresa:"",
                    firststar: "",
                    secondstar: "",
                    thirdstar: "",
                    fourthstar: "",
                    fifthstar: "",
                },
                {
                    link: apiFlag + "DZ.png",
                    country: "Algeria",
                    linkTitle: amazon + "So-Vast-Prison-Novel-English-ebook/dp/B00541YDJ4/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=",
                    title: "So Vast the Prison",
                    reviewInes:"",
                    reviewTeresa:"",
                    firststar: "",
                    secondstar: "",
                    thirdstar: "",
                    fourthstar: "",
                    fifthstar: "",
                },
                {
                    link: apiFlag + "AL.png",
                    country: "Albania",
                    linkTitle: amazon + "Sworn-Virgin-English-Elvira-Dones-ebook/dp/B00IHH2NZI/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=R3IRWW4R66KL&keywords=sworn+virgin&qid=1688822302&s=digital-text&sprefix=sworn+virgin%2Cdigital-text%2C157&sr=1-1",
                    title: "Sworn Virgin",
                    reviewInes: "Reading about other cultures is always an interesting experience, however, this wasn't the case in this book. Unfortunately, the author had a good idea, but her execution of it wasn't the best. The protagonist's reasons throughout the story felt shallow, with her path not making any sense at all in the end (at least not in the deep way the author was trying to convey).I learned a lit bit about Albania, though.",
                    starsInes: "2.5/5",
                    reviewTeresa: "The story can be confusing at times and the character doesn't seem to live in the real world. Disappointed with the ending because I found it unrealistic and unnecessary. For me, the author fails to create enough motivation to apply the tradition in such a radical way. I had a hard time sympathizing with the character. Good idea, bad execution. It's well written, though.",
                    starsTeresa: "3/5",
                    firststar: "fa fa-star checked",
                    secondstar: "fa fa-star checked",
                    thirdstar: "fa fa-star checked",
                    fourthstar: "fa fa-star",
                    fifthstar: "fa fa-star",
                },
                {
                    link: apiFlag + "AF.png",
                    country: "Afghanistan",
                    linkTitle: amazon + "Patience-Stone-English-Atiq-Rahimi-ebook/dp/B00351YETO/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=",
                    title: "Patience Stone",
                    reviewInes: "It's a short story and very well written. The author brought forth the perspective of a woman who comes from a very restrictive society in a very interesting and impressive way (especially if you consider the fact that he is a man). Besides that, I liked the plot idea and I think it was very well developed. My only problem was the ending, it made no sense with everything that was happening until that point (maybe if the author had finished the story some pages before that wouldn't have been a problem).",
                    starsInes: "4.5/5",
                    reviewTeresa: "This is an amazing journey through a woman's inner voice. Everything she is, her thoughts, feelings, and confusion about the rules of the world. How she connects her present with her past and makes decisions about the future. I didn't care much for the ending, though (it seemed like the author didn't know how to end). It left a mark on me. I will probably read it again in the future.",
                    starsTeresa: "4/5",
                    //Half Star: fa-star-half-o checked
                    //Full Star: fa fa-star checked
                    firststar: "fa fa-star checked", 
                    secondstar: "fa fa-star checked",
                    thirdstar: "fa fa-star checked",
                    fourthstar: "fa fa-star checked",
                    fifthstar: "fa fa-star-half-o checked",
                },
            ],
        });

    //Overwrite the contents of #target with the renderer HTML
    document.getElementById('book-entry-two').innerHTML = rendered;
}