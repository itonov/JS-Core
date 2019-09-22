function validate() {
    $("#company").on("change", (event) => {
        event.preventDefault();
        event.stopPropagation();

        if ($("#company").is(":checked")) {
            $("#companyInfo").css("display", "block");
        } else {
            $("#companyInfo").css("display", "none");
        }
    });

    const usernamePattern = /^\w{3,20}[^.]$/gm;
    const passwordPattern = /^\w{5,15}[^.]$/gm;
    const emailPattern = /^\w+\@\w+\.\w+$/gm;
    const companyNumPattern = /^[1-9][0-9][0-9][0-9]$/gm;

    $("#submit").on("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        const $username = $("#username");
        const $password = $("#password");
        const $passwordConfirm = $("#confirm-password");
        const $email = $("#email");
        const $companyNum = $("#companyNumber");

        const usernameInput = $username.val();
        const passwordInput = $password.val();
        const confirmPasswordInput = $passwordConfirm.val();
        const emailInput = $email.val();
        const companyNumInput = $companyNum.val();

        if (usernameInput.match(usernamePattern) === null) {
            $username.css("border-color", "red");
        } else {
            $username.css("border-color", "none");
        }

        if (passwordInput.toString().localeCompare(confirmPasswordInput.toString()) === 0) {
            $password.css("border-color", "none");
            $passwordConfirm.css("border-color", "");

            if (passwordPattern.exec(passwordInput) > -1) {
                $password.css("border-color", "red");
            } else {
                $password.css("border-color", "none");
            }
        } else {
            $password.css("border-color", "red");
            $passwordConfirm.css("border-color", "red");
        }

        if (emailInput.match(emailPattern) === null) {
            $email.css("border-color", "red");
        } else {
            $email.css("border-color", "none");
        }

        if (companyNumInput.match(companyNumPattern) === null) {
            $companyNum.css("border-color", "red");
        } else {
            $companyNum.css("border-color", "none");
        }
    })
}
