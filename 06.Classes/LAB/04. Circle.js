/**
 * Created by Kondoff on 01-Nov-16.
 */
class Circle{
    constructor(radius){
        this.radius=radius;
    };
    get diameter(){
        return this.radius * 2
    }
    set diameter(diameter){
        this.radius=diameter / 2
    }

    get area(){
        return Math.PI *this.radius*this.radius
    }
};


let c=new Circle(2);
console.log(c.radius);
console.log(c.diameter);
console.log(c.area);
console.log(c);

c.diameter=8;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
