function townsToJSON(inputArr) {
    let properties = inputArr.shift().split(/\s?\|\s?/gm).filter(a => a !== "");

    let towns = inputArr
        .map((inputRow, index) => {
            inputRow = inputRow
                .split(/\s?\|\s?/gm)
                .filter(a => a !== "");
            let town = {};

            inputRow.forEach((rowData, rowDataIndex) => {
                if (rowDataIndex > 0) {

                    town[properties[rowDataIndex]] = +(+rowData).toFixed(2);
                } else {
                    town[properties[rowDataIndex]] = rowData;
                }
            });

            return town;
        });

    let result = [];

    towns.forEach(town => {
        result.push(JSON.stringify(town));
    });

    console.log(`[${result.join(",")}]`);

}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);