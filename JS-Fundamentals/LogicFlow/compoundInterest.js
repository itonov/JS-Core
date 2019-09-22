function compoundInterest([principalSum, interestRate, compoundingPeriod, totalYears]) {
    let compoundingFrequency = 12 / compoundingPeriod;
    let result = principalSum * Math.pow((1 + (interestRate / compoundingFrequency)), compoundingFrequency * totalYears);
    console.log(result);
}

compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);