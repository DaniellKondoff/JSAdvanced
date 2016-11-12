/**
 * Created by Kondoff on 27-Oct-16.
 */
let f=function counterClouser() {
    let counter=0;
    function nextCount() {
        console.log(++counter)
    }
    return nextCount
}


// closures - IIFE

let count =(function () {
    let counter = 0;
    return function () {
        console.log(++counter)
    }
}());
console.log(count());

let counter=(()=>{
    let num = 0;
    return () => console.log(++num)

})()

console.log(counter())



