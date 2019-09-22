function makeReservation(container) {
    let fullName;
    let email;
    let phoneNumber;
    let address;
    let postalCode;

    (function () {
        $("#submit").click(function (event) {
            event.stopPropagation();
            event.preventDefault();

            fullName = $("#fullName").val();
            email = $("#email").val();
            phoneNumber = $("#phoneNumber").val();
            address = $("#address").val();
            postalCode = $("#postalCode").val();

            if (fullName !== "" && email !== "") {
                let $ul = $("#infoPreview");
                $ul.append(`<li>Name: ${fullName}</li>
<li>E-mail: ${email}</li>
<li>Phone: ${phoneNumber}</li>
<li>Address: ${address}</li>
<li>Postal Code: ${postalCode}</li>`);

                $("#submit").attr("disabled", true);
                $("#edit").attr("disabled", false);
                $("#continue").attr("disabled", false);
            }
        })
    })();

    (function () {
        $("#edit").click(function (event) {
            event.stopPropagation();
            event.preventDefault();

            $("#fullName").val(fullName);
            $("#email").val(email);
            $("#phoneNumber").val(phoneNumber);
            $("#address").val(address);
            $("#postalCode").val(postalCode);

            let $ul = $("#infoPreview");
            $ul.empty();

            $("#submit").attr("disabled", false);
            $("#edit").attr("disabled", true);
            $("#continue").attr("disabled", true);
        })
    })();

    (function () {
        $("#continue").click(function (event) {
            event.stopPropagation();
            event.preventDefault();

            $("#submit").attr("disabled", true);
            $("#edit").attr("disabled", true);
            $("#continue").attr("disabled", true);

            $(container).append(`<h2>Payment details</h2>
<select id="paymentOptions" class="custom-select">
<option selected disabled hidden>Choose</option>
<option value="creditCard">Credit Card</option>
<option value="bankTransfer">Bank Transfer</option>
</select>
<div id="extraDetails"></div>`);

            $("#paymentOptions").change(function (event) {
                event.preventDefault();
                event.stopPropagation();

                let value = $("#paymentOptions").val();

                let $div = $("#extraDetails");
                $div.empty();

                switch (value) {
                    case "creditCard":
                        $div.append(`<div class="inputLabel">Card Number<input></div><br><div class="inputLabel">Expiration Date<input></div><br><div class="inputLabel">Security Numbers<input></div><br>`);
                        break;
                    case "bankTransfer":
                        $div.append(`<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>`);
                        break;
                    default:
                        break;
                }

                $div.append(`<button id="checkOut">Check Out</button>`);

                $("#checkOut").click(function (event) {
                    event.preventDefault();
                    event.stopPropagation();

                    let $div = $("#wrapper");
                    $div.empty();
                    $div.append(`<h4>Thank you for your reservation!</h4>`)
                })

            })
        })
    })();
}