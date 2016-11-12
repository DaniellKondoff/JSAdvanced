/**
 * Created by Kondoff on 25-Oct-16.
 */
function solve(a,b) {
    if(a==0){
        return b;
    }

    if(b==0){
        return a
    }
    return solve(b, a%b)
}

console.log(solve(252,105))