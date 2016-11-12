let solution=(function () {
    function add(vectorA,vectorB) {
        return [vectorA[0]+ vectorB[0],vectorA[1]+vectorB[1]]
    }

    function multiply(vector,cmd) {
        return [vector[0]*cmd,vector[1]*cmd]
    }

    function length(vector) {
        return Math.sqrt((vector[0]*vector[0])+(vector[1]*vector[1]))
    }

    function dot(vectorA,vectorB) {
        return vectorA[0]*vectorB[0]+vectorA[1]*vectorB[1]

    }

    function cross(vectorA,vectorB) {
        return vectorA[0]*vectorB[1] -vectorB[0]*vectorA[1];
    }
    return { add,multiply,length,dot,cross }
})();
console.log(solution.add([1, 1], [1, 0]))

