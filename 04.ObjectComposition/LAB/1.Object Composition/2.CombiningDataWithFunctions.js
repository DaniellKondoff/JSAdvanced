/**
 * Created by Kondoff on 27-Oct-16.
 */
let rect={
    width:10,
    height:4,
    grow: function (w,h) {
        this.width+=w;
        this.height+=h;
    },
    print: function () {
        console.log(`[${this.width} x ${this.height}]`)
    }
};

rect.grow(2,3);
rect.print();

let rectangle={
    width:10,
    height:4,
    grow: function (w,h) {
        rectangle.width+=w;
        rectangle.height+=h;
    },
    print: function () {
        console.log(`[${rectangle.width} x ${rectangle.height}]`)
    }
};

rectangle.grow(2,3);
rectangle.print();