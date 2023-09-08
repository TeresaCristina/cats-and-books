var template_one = document.getElementById('blog-entry-template-one').innerHTML;
var compiled_template_one = Handlebars.compile(template_one);

const apiFlag = "https://www.countryflagicons.com/FLAT/64/";
const amazon = "https://www.amazon.com.br/";
    
//Render the data into the template
var rendered_one = compiled_template_one
({  
    book: [
            {link: apiFlag + "TR.png",
            country: "Turkey",
            linkTitle: amazon + "minutos-segundos-neste-mundo-estranho-ebook/dp/B094C54N3S/ref=sr_1_1?crid=5NZXI4HTJ3HX&keywords=10+minutos+e+38+segundos+neste+mundo+estranho&qid=1693473035&s=digital-text&sprefix=10+minutos+e+3%2Cdigital-text%2C189&sr=1-1", 
            title: "10 minutos e 38 segundos neste mundo estranho",},
            {link: apiFlag + "KR.png",
                        country: "South Korea",
                        linkTitle: amazon + "Kim-Jiyoung-nascida-em-1982-ebook/dp/B09SBLCYBF/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2LJIYFZCUDN4I&keywords=nascida+em+1982&qid=1693472677&sprefix=nascida+em+1982%2Caps%2C167&sr=8-1",
                        title: "Nascida em 1982",
                    },
                {
                    link: apiFlag + "NG.png",
                    country: "Nigeria",
                    linkTitle: amazon + "garota-que-n%C3%A3o-calou/dp/655924010X/ref=sr_1_1?crid=3ICB4ZTIRD63A&keywords=a+garota+que+n%C3%A3o+se+calou&qid=1693473263&sprefix=a+garota+que+%2Caps%2C176&sr=8-1", 
                    title: "A garota que nao se calou",
                },
                {
                    link: apiFlag + "AT.png",
                    country: "Austria",
                    linkTitle: amazon + "Weight-Things-Marianne-Fritz/dp/0989760774/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=The+Weight+of+Things&qid=1693515889&sr=8-1",
                    title: "The Weight of Things",
                },
                {
                    link: apiFlag + "AU.png",
                    country: "Australia",
                    linkTitle: amazon + "",
                    title: "",
                },
                {
                    link: apiFlag + "AM.png",
                    country: "Armenia",
                    linkTitle: amazon + "Three-Apples-Fell-Sky-English-ebook/dp/B07XYFDLB8/ref=sr_1_1?keywords=Three+Apples+Fell+from+the+Sky&qid=1693503772&rnid=18726358011&s=digital-text&sr=1-1",
                    title: "Three Apples Fell from the Sky",
                },
                {
                    link: apiFlag + "AR.png",
                    country: "Argentina",
                    linkTitle: amazon + "Fever-Dream-English-Samanta-Schweblin-ebook/dp/B01IAUGBU4/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=G1GZUAC0N6US&keywords=Samanta+Schweblin+Fever+Dream&qid=1693503337&sprefix=samanta+schweblin+fever+dream%2Caps%2C203&sr=8-1",
                    title: "Fever Dream",
                },
                {
                    link: apiFlag + "AG.png",
                    country: "Antigua and Barbuda",
                    linkTitle: amazon + "Annie-John-English-Jamaica-Kincaid-ebook/dp/B09SG8DRKM/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=180IB1VU5RLJP&keywords=Annie+John%2C&qid=1693502977&rnid=5308307011&s=digital-text&sprefix=annie+john+%2Cdigital-text%2C199&sr=1-1",
                    title: "Annie John",
   
                },
                {
                    link: apiFlag + "AO.png",
                    country: "Angola",
                    linkTitle:"" ,
                    title: "",
                },
                {
                    link: apiFlag + "AN.png",
                    country: "Andorra",
                    linkTitle: amazon + "Andorra-Revealed-English-Clare-Allcard-ebook/dp/B01ALT3CAO/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=" ,
                    title: "Andorra Revealed",

                },
            ],
});


document.getElementById('book-entry-one').innerHTML = rendered_one;
    
