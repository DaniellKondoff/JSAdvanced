/**
 * Created by Kondoff on 23-Oct-16.
 */
function invokeAll(functionsArr) {
    for(let func of functionsArr) func();
}

let last=function () {
    console.error("last");
}

invokeAll([()=> console.info('first'),()=>console.warn('second'),last]);