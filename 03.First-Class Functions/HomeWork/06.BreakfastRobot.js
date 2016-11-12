/**
 * Created by Kondoff on 25-Oct-16.
 */
let robot=(function () {
    let resources={protein:0,carbohydrate:0,fat:0,flavour:0};

    let recipes={
        apple:{carbohydrate:1,flavour:2},
        coke:{carbohydrate:10,flavour:20},
        burger:{carbohydrate:5,fat:7,flavour:3},
        omelet:{protein:5,fat:1,flavour:1},
        cheverme:{protein:10,carbohydrate:10,fat:10,flavour:10}
    };

    function restock(element,quantity) {
        resources[element]+=Number(quantity);
        return 'Success'
    }

    function prepare(recipe,quantity) {
        for(let element of Object.keys(recipes[recipe])){
            let totalQuantity=recipes[recipe][element]*quantity;
            if(resources[element]<totalQuantity){
                return `Error: not enough ${element} in stock`;
            }
        }

        for(let element of Object.keys(recipes[recipe])){
            resources[element]-=recipes[recipe][element]*Number(quantity)
        }

        return'Success'
    }

    function report() {
        return [...Object.keys(resources)]
            .map(key=>key +'='+resources[key])
            .join(' ')
    }

    return function commandProccessor(input) {
        let cmd =input.split(' ');
        let commandName=cmd.shift();
        let argument=cmd;
        switch (commandName){
            case 'restock':
                return restock(...argument);
            break;
            case 'prepare':
                return prepare(...argument);
            break;
            default:
                return report();
            break;
        }
    }

})();

console.log(robot('restock flavour 100'));
console.log(robot('restock carbohydrate 100'));
console.log(robot('prepare apple 50'));
console.log(robot('report'));
