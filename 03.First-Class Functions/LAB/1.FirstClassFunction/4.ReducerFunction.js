/**
 * Created by Kondoff on 23-Oct-16.
 */
function reduce(arr,func) {
    let result = arr[0];
    for (let nextElement of arr.slice(1)){
        result = func(result, nextElement);
    }
    return result;
}

console.log(reduce([5,10,20],(a,b)=>a+b));
console.log(reduce([5,10,20],(a,b)=>a*b));

