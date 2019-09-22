function findDistanceOverTime([firstSpeed, secondSpeed, period]) {
    let firstDistance = ((+firstSpeed * 1000) / 3600) * +period;
    let secondDistance = ((+secondSpeed * 1000) / 3600) * +period;
    let distance = firstDistance - secondDistance;

    console.log(Math.abs(distance));

}

findDistanceOverTime([0, 60, 3600]);
findDistanceOverTime([11, 10, 120]);
