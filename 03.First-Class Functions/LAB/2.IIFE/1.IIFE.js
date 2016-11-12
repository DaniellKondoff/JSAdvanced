/**
 * Created by Kondoff on 23-Oct-16.
 */
(function () {
    console.log("invoked!");
})();


let iife = function () {console.log("invoked!");}();
console.log(iife)

iife()