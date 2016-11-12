/**
 * Created by Kondoff on 28-Oct-16.
 */
let moduleObject = {
    count:0,
    increase: function (num) { return this.count+=num},
    decrease:function (num) { return this.count-=num},
    value: function () { return this.count}
};
moduleObject.count=5;
moduleObject.increase(2)
moduleObject.decrease(1)
console.log(moduleObject.value())