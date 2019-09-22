function processor(inputArr) {
    let processObject = {
        text: '',
        append: function (value) {
            this.text += value;
        },
        removeStart: function (value) {
            this.text = this.text.slice(value, this.text.length);
        },
        removeEnd: function (value) {
            this.text = this.text.slice(0, this.text.length - +value);
        },
        print: function () {
            console.log(this.text);
        }
    };

    inputArr.forEach(inputLine => {
        let inputArgs = inputLine.split(' ');
        let action = inputArgs[0];

        if (action.localeCompare('print') === 0) {
            processObject.print();
        } else {
            let value = inputArgs[1];

            switch (action) {
                case 'append':
                    processObject.append(value);
                    break;
                case 'removeStart':
                    processObject.removeStart(value);
                    break;
                case 'removeEnd':
                    processObject.removeEnd(value);
                    break;
                default:
                    break;
            }
        }
    })
}

processor(["append hello", "append again", "removeStart 3", "removeEnd 4", "print"]);