function acceptance() {
    let company = $("input[name=shippingCompany]").val();
    let product = $("input[name=productName]").val();
    let quantity = +$("input[name=productQuantity]").val();
    let scrape = +$("input[name=productScrape]").val();

    if (company !== "" && product !== "" && quantity > 0 && scrape > 0 && !isNaN(+quantity) && !isNaN(+scrape)) {
        if (quantity > 0) {
            $("input[name=productScrape]").val("");
            $("input[name=shippingCompany]").val("");
            $("input[name=productName]").val("");
            $("input[name=productQuantity]").val("");

            let $div = $("#warehouse");
            $div.append(`<div>
<p>[${company}] ${product} - ${+quantity - +scrape} pieces</p>
<button type="button">Out of stock</button>
</div>`);

            $($div.children().last().children()[1]).click(function (event) {
                event.preventDefault();
                event.stopPropagation();

                $(this).parent().remove();
            })
        }
    }
}