let Console=require("../05.C#Console").Console;
let expect=require("chai").expect;

describe("Console.writeline - one parametar" ,function () {
    it("should return a functuon for Console.writline",function () {
        expect(typeof Console.writeLine).to.be.equal('function')
    });
    describe("Test with one argument" ,function () {
        it("should return string for  a string",function () {
            let expectedSum="Ivan";
            let actualSum=Console.writeLine("Ivan");
            expect(actualSum).to.be.equal(expectedSum);
        });
        it("should return undefined fornon string",function () {
            //let expectedSum="Ivan";
            let actualSum=Console.writeLine(5);
            expect(actualSum).to.be.undefined;
        });
        it("should return TypeError empty input",function () {
            expect(() => Console.writeLine()).to.throw(TypeError);
        });
        it("should return string for  a string",function () {
            let expectedObj={'name':'Gosho'};
            let actualSum=Console.writeLine(expectedObj);
            expect(actualSum).to.be.equal(JSON.stringify(expectedObj));
        });

    });

    describe("Test with two arguments" ,function () {
        it("should return TypeError for  non a string first parametar",function () {
            expect(() => Console.writeLine(5, 'test')).to.throw(TypeError);
        });
        it("should return RangeError for  not correspond to the number of placeholders in the template",function () {
            expect(() => Console.writeLine('Test {0}, {1}{2}','Ivan','Pesho')).to.throw(RangeError);
        });
        it("should return RangeError for  not correspond to the number of placeholders in the template",function () {
            expect(() => Console.writeLine('Test {0}, {1}','Ivan','Pesho','Gosho')).to.throw(RangeError);
        });
        it("should return RangeError for  out of scope placeholders in the template",function () {
            expect(() => Console.writeLine('Test {0}, {1},{13}','Ivan','Pesho','Gosho')).to.throw(RangeError);
        });
        it("should return RangeError for  out of scope  placeholders in the template",function () {
            expect(() => Console.writeLine('Test {-2}, {1},{13}','Ivan','Pesho','Gosho')).to.throw(RangeError);
        });
        it("should return RangeError for  out of scope placeholders in the template",function () {
            expect(() => Console.writeLine('Test {-2}, {1},{2}','Ivan','Pesho','Gosho')).to.throw(RangeError);
        });
        it("should return RangeError for  out of scope placeholders in the template",function () {
            expect(() => Console.writeLine('Test {50}','Ivan')).to.throw(RangeError);
        });
        it('should replace correctly all placeholders', () => {
            expect(Console.writeLine('Test {0}, {1} {2} - {3}', 'first', 'second', 'third', 'fourth')).to.equal('Test first, second third - fourth');
        });
        it('should replace correctly all placeholders on mixed placeholder numbers', () => {
            expect(Console.writeLine('Test {1}, {0} {2} - {3}', 'first', 'second', 'third', 'chetvyrti')).to.equal('Test second, first third - chetvyrti');
        });
        it('should replace correctly one placeholder', () => {
            expect(Console.writeLine('{0}', 'first')).to.equal('first');
        });
    });


});

