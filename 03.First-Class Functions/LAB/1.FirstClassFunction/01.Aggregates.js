/**
 * Created by Kondoff on 23-Oct-16.
 */
function calcAggregates(arr) {
    let sum=arr.reduce((a,b)=>Number(a)+Number(b));
    console.log("Sum = "+sum);
    let min =arr.reduce((a,b)=>Math.min(a,b));
    console.log("Min = "+min);
    let max =arr.reduce((a,b)=>Math.max(a,b));
    console.log("Max = "+max);
    let product=arr.reduce((a,b)=>Number(a)*Number(b));
    console.log("Product = "+product);
    let joinStr=arr.reduce((a,b)=> ''+a+b);
    console.log("Join = "+joinStr)

}

calcAggregates(['2', '3', '10', '5'])

