function usernames(inputEmailArr) {
    let regex = /^([a-z_0-9]+)@([a-z]+)\.([a-z]+)\.*([a-z]+)*$/gm;
    let usernames = [];

    inputEmailArr.forEach(email => {
        let username = email.split("@")[0] + ".";
        let domainParts = email.split("@")[1].split(".");

        domainParts.forEach(part => username += part[0]);

        usernames.push(username);
    });

    console.log(usernames.join(", "));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);