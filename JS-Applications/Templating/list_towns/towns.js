function attachEvents() {
    const template = Handlebars.compile($("#towns-template").html());

    $("#btnLoadTowns").click(() => {
        const towns = $("#towns").val().split(", ");
        const html = template(towns);
        $("#root").append(html);
    });
}