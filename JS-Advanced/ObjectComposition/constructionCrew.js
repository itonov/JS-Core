let worker = {
    weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false
};

function fixWorker(worker) {
    if (worker.handsShaking) {
        worker.bloodAlcoholLevel += 0.1 * worker.weight * worker.experience;
        worker.handsShaking = false;
    }

    return worker;
}

console.log(fixWorker(worker));