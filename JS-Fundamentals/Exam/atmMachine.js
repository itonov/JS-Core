function atmMachine(inputMatrix) {
    let machineBalance = [];

    for (let i = 0; i < inputMatrix.length; i++) {
        let commandsLine = inputMatrix[i];

        if (commandsLine.length > 2) {
            commandsLine.forEach(banknote => {
                let banknoteExists = false;

                machineBalance.forEach(innerBanknote => {
                    if (banknote === innerBanknote.name) {
                        banknoteExists = true;
                    }
                });

                if (!banknoteExists) {
                    machineBalance.push({
                        name: banknote,
                        amount: 0
                    });
                }

                machineBalance.forEach(innerBanknote => {
                    if (innerBanknote.name === banknote) {
                        innerBanknote.amount ++;
                    }
                });
            });

            let sumToInsert = commandsLine.reduce((acc, value) => {
                return acc += value;
            }, 0);

            let currentMachineBalance = machineBalance.reduce((acc, banknote) => {
                return acc += (banknote.name * banknote.amount);
            }, 0);

            machineBalance.sort((banknoteA, banknoteB) => banknoteB.name - banknoteA.name);

            console.log(`Service Report: ${sumToInsert}$ inserted. Current balance: ${currentMachineBalance}$.`);
        } else if (commandsLine.length === 2) {
            let accountBalance = +commandsLine[0];
            let amountToWithdraw = +commandsLine[1];

            let currentMachineBalance = machineBalance.reduce((acc, banknote) => {
                return acc += (banknote.name * banknote.amount);
            }, 0);

            if (accountBalance < amountToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`);
            } else if (currentMachineBalance < amountToWithdraw) {
                console.log(`ATM machine is out of order!`);
            } else {
                let remainingAccountBalance = accountBalance - amountToWithdraw;
                console.log(`You get ${amountToWithdraw}$. Account balance: ${remainingAccountBalance}$. Thank you!`);

                for (let j = 0; j < machineBalance.length; j++) {
                    let currentBanknote = machineBalance[j];
                    
                    if (currentBanknote.name <= amountToWithdraw) {
                        currentBanknote.amount--;
                        amountToWithdraw -= currentBanknote.name;

                        if (currentBanknote.amount === 0) {
                            machineBalance.splice(j, 1);
                        } else {
                            j--;
                        }
                    }
                }
            }
        } else if (commandsLine.length === 1) {
            let neededBanknote = +commandsLine[0];
            let banknoteAmount = 0;

            machineBalance.forEach(banknote => {
                if (banknote.name === neededBanknote) {
                    banknoteAmount = banknote.amount;
                }
            });

            console.log(`Service Report: Banknotes from ${neededBanknote}$: ${banknoteAmount}.`);
        }
    }
}

atmMachine([[20, 5, 100, 20, 1],
        [457, 25],
        [1],
        [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
        [20, 85],
        [5000, 4500]]);