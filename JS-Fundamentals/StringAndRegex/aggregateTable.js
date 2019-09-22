function aggregateTable(inputTable) {
    let regex = / *\| */gm;

    let resultTowns = [];
    let totalIncome = 0;

    inputTable.forEach(row => {
        let splitResult = row.split(regex).filter(element => element !== '');
        resultTowns.push(splitResult[0]);
        totalIncome += +splitResult[1];
    });

    console.log(resultTowns.join(", "));
    console.log(totalIncome);
}

aggregateTable(['| Sofia | 300',
    '| Veliko Tarnovo       | 500',
    '| Yambol       |    275'])