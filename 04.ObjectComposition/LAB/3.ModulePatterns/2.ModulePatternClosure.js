/**
 * Created by Kondoff on 28-Oct-16.
 */
let moduleClosure=(function () {
    let count = 0;
    return {
        increase: (num)=> count += num,
        decrease: (num)=> count -= num,
        value:()=>count
    }
})();
moduleClosure.increase(5);
moduleClosure.decrease(2);
console.log(moduleClosure.value());
console.log(moduleClosure.count)
