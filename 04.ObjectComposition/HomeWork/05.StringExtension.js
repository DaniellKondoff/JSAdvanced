/**
 * Created by Kondoff on 29-Oct-16.
 */
(function () {
    String.prototype.isEmpty = function () {
        return this == '';
    };
    String.prototype.ensureStart=function (str) {
        if(this.startsWith(str)){
            return this.toString();
        }
        else {
            return str + this.toString()
        }
    };
    String.prototype.ensureEnd=function (str) {
        if(this.endsWith(str)){
            return this.toString()
        }
        return this.toString() + str;
    };

    String.prototype.truncate=function (n) {
        if (this.length <= n) return this.toString();
        if (n < 4) {
            return 'n'.repeat(n)
        }

        // if there is no space
        if(!this.includes(' ')){
            return this.slice(0,n - 3)+'...';
        }

        //if there is space and words
        let tokens=this.split(' ');
        let result=tokens[0];

        for(let i=1;i<tokens.length;i++){
            if(result.length + tokens[i].length +4>n){
                return result + '...'
            }
            result+= ` ${tokens[i]}`;
        }
    };
    
    String.format=function (str, ...params) {
        return str.replace(/\{([\d]+)\}/g,function (m, g) {

            if(params[Number(g)] != undefined){
                return params[Number(g)];
            }

            return m;
        });
    }

})();

let str='strihi asdasefddaw';

console.log(str.truncate('20'))