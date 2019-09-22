function findVarNames(strToCheck) {
    let regex = /\b_[a-zA-Z]+\b/gm;
    let match = regex.exec(strToCheck);
    let result = [];

    while (match) {
        result.push(match[0].substr(1));
        match = regex.exec(strToCheck);
    }

    console.log(result.join(","));
}

findVarNames('The _id and _age variables are both integers.');