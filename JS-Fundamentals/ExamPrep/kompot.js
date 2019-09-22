function kompot(inputArr) {
    let peachKg = 0;
    let plumKg = 0;
    let cherryKg = 0;
    let rakiyaKg = 0;

    for (let i = 0; i < inputArr.length; i++) {
        let [fruitName, kg] = inputArr[i].split(/\s+/gm);
        switch (fruitName) {
            case "peach":
                peachKg += +kg;
                break;
            case "plum":
                plumKg += +kg;
                break;
            case "cherry":
                cherryKg += +kg;
                break;
            default:
                rakiyaKg += +kg;
                break;
        }
    }

    let peachKompots = Math.floor(((peachKg * 1000) / 140) / 2.5);
    let plumKompots = Math.floor(((plumKg * 1000) / 20) / 10);
    let cherryKompots = Math.floor(((cherryKg  * 1000)/ 9) / 25);
    let litresRakiya = rakiyaKg * 0.2;

    console.log(`Cherry kompots: ${cherryKompots}`);
    console.log(`Peach kompots: ${peachKompots}`);
    console.log(`Plum kompots: ${plumKompots}`);
    console.log(`Rakiya liters: ${litresRakiya.toFixed(2)}`);
}

kompot(['cherry 1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0',
    'papaya 20']
);