/**
 * Created by Kondoff on 23-Oct-16.
 */
let f=(function () {
    let counter=0;
    return function () {
        console.log(++counter)
    }
})();

f()
f()
f()

