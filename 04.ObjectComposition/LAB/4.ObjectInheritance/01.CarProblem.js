function createCar(commands) {

    let allCars=new Map;

    let carManager = {
        create: function ([name, ,parent]) {
            parent =parent ? allCars.get(parent) :null;
            let newObj=Object.create(parent);
            allCars.set(name,newObj);
            return newObj
        }
    }


    for(let command of commands){
        let tokens=command.split(' ');
        let action=commandParametars.shift();
        carManager[action](tokens);
    }
    
    

}

createCar (['create c1','create c2 inherit c1']);

(createCar (['create c1','create c2 inherit c1','print']))

