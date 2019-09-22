function f1Championship(inputArr) {
    let teams = [];

    for (let i = 0; i < inputArr.length; i++) {
        let currentLineTokens = inputArr[i].split(' -> ');
        let teamName = currentLineTokens[0];
        let pilotName = currentLineTokens[1];
        let pilotPoints = +currentLineTokens[2];

        let teamExists = false;

        teams.forEach(team => {
            if (team.name === teamName) {
                teamExists = true;
            }
        });

        if (!teamExists) {
            teams.push({
                name: teamName,
                pilots: [],
            });
        }

        let pilotExists = false;

        teams
            .filter(team => team.name === teamName)[0]
            .pilots
            .forEach(pilot => {
                if (pilot.pilotName === pilotName) {
                    pilotExists = true;
                }
            });

        if (!pilotExists) {
            teams
                .filter(team => team.name === teamName)[0]
                .pilots
                .push({
                    pilotName: pilotName,
                    points: 0
                });
        }

        teams
            .filter(team => team.name === teamName)[0]
            .pilots
            .filter(pilot => pilot.pilotName === pilotName)[0].points += pilotPoints;

    }

    teams.sort((teamA, teamB) => {
        let firstTeamPoints = teamA.pilots.reduce((acc, pilot) => {
            return acc += pilot.points;
        }, 0);

        let secondTeamPoints = teamB.pilots.reduce((acc, pilot) => {
            return acc += pilot.points;
        }, 0);

        return secondTeamPoints - firstTeamPoints;
    })
        .forEach(team => {
            team.pilots.sort((pilotA, pilotB) => pilotB.points - pilotA.points);
        });

    teams.splice(0, 3).forEach(team => {
        let totalPoints = team.pilots.reduce((acc, pilot) => {
            return acc += pilot.points;
        }, 0);
        console.log(`${team.name}: ${totalPoints}`);

        team.pilots.forEach(pilot => {
            console.log(`-- ${pilot.pilotName} -> ${pilot.points}`);
        });
    });
}

f1Championship(['Ferrari -> Kimi Raikonnen -> 25',
    'Ferrari -> Sebastian Vettel -> 18',
    'Mercedes -> Lewis Hamilton -> 10',
    'Mercedes -> Valteri Bottas -> 8',
    'Red Bull -> Max Verstapen -> 6',
    'Red Bull -> Daniel Ricciardo -> 4',
    'Mercedes -> Lewis Hamilton -> 25',
    'Mercedes -> Valteri Bottas -> 18',
    'Haas -> Romain Grosjean -> 25',
    'Haas -> Kevin Magnussen -> 25']);