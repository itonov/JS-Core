function getArticleGenerator(inputArticles) {
    const articles = inputArticles;

    return function () {
        if (articles.length > 0) {
            $("#content").append(
                $(`<article>${articles.splice(0, 1)}</article>`)
            );
        }
    }
}