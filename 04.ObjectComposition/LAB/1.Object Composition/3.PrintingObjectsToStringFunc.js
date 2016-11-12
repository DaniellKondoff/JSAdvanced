/**
 * Created by Kondoff on 27-Oct-16.
 */
let rect = {
    width: 10,
    height: 4,
    toString: function() {
        return `rect[${this.width} x ${this.height}]`;
    }
};

console.log(rect);// Object {width: 10, height: 4}

console.log('' + rect);// This will invoke toString() to convert the object to String // rect[12x7]
