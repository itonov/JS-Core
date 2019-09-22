function f1Race(inputArr) {
    let pilots = inputArr.shift().split(/\s+/gm);

    inputArr.forEach(line => {
        let [action, pilotName] = line.split(/\s+/gm);

        switch (action) {
            case "Join":
                if (!pilots.indexOf(pilotName) >= 0 ) {
                    pilots.push(pilotName);
                }
                break;
            case "Crash":
                if (pilots.indexOf(pilotName)  >= 0) {
                    pilots = pilots.filter(name => name !== pilotName);
                }
                break;
            case "Pit":
                if (pilots.indexOf(pilotName)  >= 0) {
                    let currentPilotIndex = pilots.indexOf(pilotName);
                    pilots[currentPilotIndex + 1] = pilots.splice(currentPilotIndex, 1, pilots[currentPilotIndex + 1])[0];
                }
                break;
            case "Overtake":
                if (pilots.indexOf(pilotName) >= 0) {
                    let currentPilotIndex = pilots.indexOf(pilotName);
                    if (currentPilotIndex > 0) {
                        pilots[currentPilotIndex - 1] = pilots.splice(currentPilotIndex, 1, pilots[currentPilotIndex - 1])[0];
                    }
                }
                break;
            default:
                break;
        }
    });

    console.log(pilots.join(' ~ '));
}

f1Race(['Vetel Hamilton Raikonnen Botas Slavi',
    'Pit Hamilton',
    'Overtake LeClerc',
    'Join Ricardo',
    'Crash Botas',
    'Overtake Ricardo',
    'Overtake Ricardo',
    'Overtake Ricardo',
    'Crash Slavi']
);