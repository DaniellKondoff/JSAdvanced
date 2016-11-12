function carProducer(requirements) {
    let carFactory = (function () {

        let engines = {
            90: {power: 90, volume: 1800},
            120: {power: 120, volume: 2400},
            200: {power: 200, volume: 3500}
        };

        let carriages = {
            hatchback: {type: 'hatchback', color: ''},
            coupe: {type: 'coupe', color: ''}
        };

        function selectEngine(power) {
            return engines[Object.keys(engines).filter(e => e >= power)[0]];
        }

        function selectCarriage(type, color) {
            let carriage = carriages[type];
            carriage.color = color;
            return carriage;
        }

        function selectWheels(number) {
            if (number % 2 == 0) {
                number--;
            }

            let wheels = [];
            for (let i = 0; i < 4; i++) {
                wheels.push(number)
            }
            return wheels;
        };

        function produceCar(requirements) {
            let resultCar = {};
            resultCar.model = requirements.model;
            resultCar.engine = selectEngine(requirements.power);
            resultCar.carriage = selectCarriage(requirements.carriage, requirements.color);
            resultCar.wheels = selectWheels(requirements.wheelsize);

            return resultCar;
        }
        return {produceCar}
    })();
    return carFactory.produceCar(requirements)
}

console.log(carProducer({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));