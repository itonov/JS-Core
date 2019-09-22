function addSticker() {
    let $title = $(".title");
    let $content = $(".content");

    let inputTitle = $title.val();
    let inputContent = $content.val();

    if (inputTitle !== "" && inputContent !== "") {
        let $ul = $("#sticker-list");

        $ul.append(`<li class='note-content'><a class='button'>x</a><h2>${inputTitle}</h2><hr><p>${inputContent}</p></li>`);

        let $closeButton = $ul.last().children().last().children()[0];

        $($closeButton).click(function (event) {
            event.preventDefault();
            event.stopPropagation();

            $(this).parent().remove();
        });

        $title.val("");
        $content.val("");
    }
}