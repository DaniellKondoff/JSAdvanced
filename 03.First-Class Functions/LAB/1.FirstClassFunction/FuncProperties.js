/**
 * Created by Kondoff on 23-Oct-16.
 */
function max(arr) {return arr;}

console.log(max.length);
console.log(max.name);
console.log((function (){}).name) //empty string

function inner(arr) {
    console.log("Caller: " + inner.caller);
}

function outer() {
    inner()
};

outer();