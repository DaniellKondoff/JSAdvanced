/**
 * Created by Kondoff on 27-Oct-16.
 */
function fibonacci(num) {
    let fib = (() => {
        let f0=0,
            f1=1;
        return ()=>{
            let oldf0=f0
                ,oldf1=f1;

            f0=oldf1;
            f1=oldf0+oldf1;
            return oldf1
        }

    })();

    let fibNumbers=[];
    for (let i=0;i<num;i++){
        fibNumbers.push(fib());
    }
    return fibNumbers;
}

console.log(fibonacci(3))

function generateFibSequence(num) {
    let getNextFibonacci = (function () {
        let f0 = 0;
        let f1 = 1;

        return function () {
            let oldf0=f0;
            let oldf1=f1;
            f0=oldf1
            f1=oldf1+oldf0
            return oldf1
        }
    })();

    let fibNums = [];
    for (let ith = 0; ith < num; ith++) {
        fibNums.push(getNextFibonacci());
    }

    return fibNums;
}