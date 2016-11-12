/**
 * Created by Kondoff on 23-Oct-16.
 */
//The Problem
let arr=[10,20,30];
let sum=0
for (let x of arr){
    sum+=x;
}
console.log(sum);

//IIFE Slution
let ar=[10,20,30];

(function (ar) {
    let sum=0;
    for(let x of ar){
        sum+=x;
    }
    console.log(sum)
})(ar);