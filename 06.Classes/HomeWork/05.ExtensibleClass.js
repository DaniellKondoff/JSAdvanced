/**
 * Created by Kondoff on 03-Nov-16.
 */
let Extensible=(function () {
    let uniqueId=0;

    return class Extensible{
        constructor(){
            this.id=uniqueId++;
        }

        extend(template){
            for(let prop in template){
                if(template.hasOwnProperty(prop)){
                    if (typeof template[prop] == 'function'){
                        Extensible.prototype[prop]=template[prop];
                    }
                    else {
                        this[prop]=template[prop];
                    }
                }

            }
        }
    }
})();

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
