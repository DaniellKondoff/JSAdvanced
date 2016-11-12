/**
 * Created by Kondoff on 30-Oct-16.
 */
function sum(arr) {
    let sum=0;
    for(let element of arr){
        sum+=Number(element)
    }
    return sum
}

module.exports ={sum};