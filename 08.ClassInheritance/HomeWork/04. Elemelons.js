/**
 * Created by Kondoff on 05-Nov-16.
 */



    class Melon{
        constructor(weight,melonSort){
            if(new.target===Melon){
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight=weight;
            this.melonSort=melonSort;
            this.element=''
        }
        get elementIndex(){
            return this.weight*this.melonSort.length
        }
        toString(){
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Watermelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)
            this.element='Water'
        }
    }

    class Firemelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)
            this.element='Fire'
        }
    }
    class Earthmelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)
            this.element='Earth'
        }
    }

    class Airmelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)
            this.element='Air'
        }
    }

    class Melolemonmelon extends Watermelon{
        constructor(weight,melonSort){
            super(weight,melonSort)
            this._elements = ['Water', 'Fire', 'Earth', 'Air'];
            this.morph();
        }
        morph() {
            let current = this._elements.shift();
            this.element = current;
            this._elements.push(current);
        }
    }



let m=new Melolemonmelon();
console.log(m.morph())


