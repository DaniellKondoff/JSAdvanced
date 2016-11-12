/**
 * Created by Kondoff on 28-Oct-16.
 */

let myFatherCar={
    brand: 'BMW',
    model:'X5',
    color:'blue',
    toString: function () {
        return `[brand: ${this.brand}, model: ${this.model}, color: ${this.color}]`
    }
};

console.log(myFatherCar.toString());
console.log(''+ myFatherCar)

let myCar=Object.create(myFatherCar);

myCar.model='M4';
myCar.color='red';
console.log(myCar.toString())

let workerCar=Object.create(myFatherCar);

workerCar.model='i3';
workerCar.type='electric'
workerCar.toString=function () {
    return `[brand: ${this.brand}, model: ${this.model}, color: ${this.color}, type:${this.type}]`
}

console.log(workerCar.toString())

console.log(Object.getPrototypeOf(myFatherCar))
console.log(Object.getPrototypeOf(myCar))
console.log(Object.getPrototypeOf(workerCar))