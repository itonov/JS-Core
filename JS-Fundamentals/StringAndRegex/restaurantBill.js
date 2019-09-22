function restaurantBill(inputArr) {
    let purchases = [];
    let totalSum = 0;
    
    inputArr.forEach((value, index) => {
        if (index === 0 || index % 2 === 0) {
            purchases.push(value);
        } else {
            totalSum += +value;
        }
    });

    console.log(`You purchased ${purchases.join(", ")} for a total sum of ${totalSum}`);
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);