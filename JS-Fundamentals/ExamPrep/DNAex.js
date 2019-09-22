function dnaEx(inputArr) {
    let organisms = [];

    for (let i = 0; i < inputArr.length; i++) {
        let currentLine = inputArr[i];

        if (currentLine !== 'Stop') {
            let match = /([!@#$?a-z]+)=([0-9]+)--([0-9]+)<<([a-z]+)/gm.exec(currentLine);
            if (match) {
                let geneName = match[1].split(/[!@#$?]/gm).join("");
                let geneNameLength = match[2];

                if (geneName.length === +geneNameLength) {
                    let genesCount = +match[3];
                    let organismName = match[4];

                    let alreadyExists = false;

                    organisms.forEach(organism => {
                        if (organism !== null && organism.name === organismName) {
                            alreadyExists = true;
                        }
                    });
                    if (!alreadyExists) {
                        organisms.push({
                            name: organismName,
                            genomeSize: 0
                        });
                    }

                    organisms.forEach(organism => {
                        if (organism.name === organismName) {
                            organism.genomeSize += +genesCount
                        }
                    });
                }
            }
        }
    }

    organisms
        .sort((organismA, organismB) => organismB.genomeSize - organismA.genomeSize)
        .forEach(organism => {
            console.log(`${organism.name} has genome size of ${organism.genomeSize}`);
        });
}

dnaEx(['!@ab?si?di!a@=7--152<<human',
    'b!etu?la@=6--321<<dog',
    '!curtob@acter##ium$=14--230<<dog',
    '!some@thin@g##=9<<human',
    'Stop!']
);