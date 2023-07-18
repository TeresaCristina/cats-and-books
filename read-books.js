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
                    link: apiFlag + "AO.png",
                    country: "Angola",
                    linkTitle: amazon + "As-mulheres-do-meu-pai-ebook/dp/B0BTMXKML5/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=" ,
                    title: "As mulheres do meu pai",
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
                    firststar: "checked",
                    secondstar: "checked",
                    thirdstar: "S",
                    fourthstar: "",
                    fifthstar: "",
                },
                {
                    link: apiFlag + "AF.png",
                    country: "Afghanistan",
                    linkTitle: amazon + "Patience-Stone-English-Atiq-Rahimi-ebook/dp/B00351YETO/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=",
                    title: "Patience Stone",
                    firststar: "checked",
                    secondstar: "checked",
                    thirdstar: "checked",
                    fourthstar: "",
                    fifthstar: "",
                },
            ],
        });

    //Overwrite the contents of #target with the renderer HTML
    document.getElementById('book-entry-two').innerHTML = rendered;
}