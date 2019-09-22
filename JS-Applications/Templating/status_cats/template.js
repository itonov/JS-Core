$(() => {
    renderCatTemplate();

    function renderCatTemplate() {

        const template = Handlebars.compile($("#cat-template").html());

        console.log($("#cat-template"));
        $(cats).each((index, cat) => {
            cat
        })

        template();



    }
});
