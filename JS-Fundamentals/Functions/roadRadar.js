function roadRadar([inputSpeed, area]) {
    let speed = +inputSpeed;

    let currentLimit = function findCurrentLimit(area) {
        switch (area) {
            case "city":
                return 50;
            case "residential":
                return 20;
            case "interstate":
                return 90;
            case "motorway":
                return 130;
        }
    };

    let speedDiff = speed - currentLimit(area);

    if (speedDiff > 0) {
        if (speedDiff <= 20) {
            console.log("speeding");
        } else if (speedDiff <= 40) {
            console.log("excessive speeding");
        } else {
            console.log("reckless driving");
        }
    }
}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);