function sumAndVat(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    let vat = sum * 0.2;
    let total = sum + vat;

    console.log(sum);
    console.log(vat);
    console.log(total);
}

sumAndVat([1.20, 2.60, 3.50]);
sumAndVat([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);