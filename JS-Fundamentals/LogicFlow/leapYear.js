function isLeapYear(yearToCheck) {
    if (((yearToCheck % 4 === 0) && (yearToCheck % 100 !== 0)) || yearToCheck % 400 === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

isLeapYear(1999);
isLeapYear('2000');
isLeapYear(1900);