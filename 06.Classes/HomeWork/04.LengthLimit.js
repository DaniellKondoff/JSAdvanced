class Stringer{
    constructor(str,length){
        this.str=str;
        this.length=length;
    }

    get innerString(){
        return this.str.toString();
    }

    get innerLength(){
        return this.length
    }

    increase(num){
         this.length+= num
    }

    decrease(num){
        this.length-=num;
        if(this.length<3){
            this.length=0
        }
    }

    toString(){
        if(this.length >= this.str.length){
            return this.str;
        }
        if (this.length==0){
            return `...`
        }

        return this.str.substr(0,this.length)+ `...`;

    }
}


let l = new Stringer('daniasdas',5);
l.increase(1)
console.log(l.toString())
