/**
 * Created by Kondoff on 29-Oct-16.
 */
function crewProcessor(worker) {
    if(worker.handsShaking){
        worker.bloodAlcoholLevel+= 0.1 * worker.experience * worker.weight;
        worker.handsShaking=false;
    }
    return worker
}




console.log(crewProcessor({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }
));

console.log(crewProcessor({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: false }
));
console.log(crewProcessor({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }
));