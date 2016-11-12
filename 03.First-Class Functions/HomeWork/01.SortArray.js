/**
 * Created by Kondoff on 24-Oct-16.
 */
function solve(inputArray, sortMethod) {

    let ascendingOrder=function (a,b) {
        return(a-b);
    };

    let descendingOrder=function (a,b) {
        return(b-a)
    };

    let sortingArr={
        'asc':ascendingOrder,
        'desc':descendingOrder
    };

    return inputArray.sort(sortingArr[sortMethod])
}

solve([14, 7, 17, 6, 8], 'asc');

console.log(solve([14, 7, 17, 6, 8], 'asc'))