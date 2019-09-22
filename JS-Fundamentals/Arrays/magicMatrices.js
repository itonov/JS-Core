function magicMatrices(inputMatrix) {
    let equalRows = true;
    let equalCols = true;

    let firstRowSum = 0;
    let firstColSum = 0;

    for (let i = 0; i < inputMatrix.length; i++) {
        if (i === 0) {
            inputMatrix[i].forEach(num => {
                firstRowSum += +num;
            });
        } else {
            let currentRowSum = 0;
            inputMatrix[i].forEach(num => {
                currentRowSum += +num;
            });

            if (firstRowSum !== currentRowSum) {
                equalRows = false;
            }
        }

        let currentColSum = 0;
        for (let j = 0; j < inputMatrix.length; j++) {
            if (i === 0) {
                firstColSum += +inputMatrix[j][i];
            } else {
                inputMatrix.forEach(num => {
                    currentColSum += +num[j];
                });

                if (firstColSum !== currentColSum) {
                    equalCols = false;
                }

                currentColSum = 0;
            }
        }
    }

    console.log(equalCols && equalRows);
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);