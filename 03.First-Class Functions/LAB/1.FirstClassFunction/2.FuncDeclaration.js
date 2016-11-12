/**
 * Created by Kondoff on 23-Oct-16.
 */
function myFync(val) {
    return val+1
}

val=5;
console.log(myFync(val));

let myFunc2=function (val) {
    return val+2
}

console.log(myFunc2(8));

let myFunc3=new Function("val","return val + 3;");
console.log(myFunc3(15))