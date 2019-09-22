function simpleEmailValidation(inputEmail) {
    inputEmail.match(/[a-zA-Z0-9]+@[a-z]+\.[a-z]+/gm) ? console.log('Valid') : console.log('Invalid');
}

simpleEmailValidation('valid@email.bg');
simpleEmailValidation('invalid@email1.bg');