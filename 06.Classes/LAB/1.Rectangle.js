/**
 * Created by Kondoff on 01-Nov-16.
 */
class Rectangle{
    constructor(widht,high,color){
        this.width=widht;
        this.high=high;
        this.color=color
    }

    calcArea(){
        return this.width*this.high
    }

    resize(ratio){
         this.width=this.width*ratio;
         this.high=this.high*ratio;
    }
}

let smallRedRectangle= new Rectangle(5,10,'red');

let bigGreenRectangle= new Rectangle(50,100,'blue');
let r=new Rectangle(10,10)
console.log(smallRedRectangle);
console.log(bigGreenRectangle);
console.log(r.calcArea());
console.log(r.resize(2));
console.log(r.calcArea());

