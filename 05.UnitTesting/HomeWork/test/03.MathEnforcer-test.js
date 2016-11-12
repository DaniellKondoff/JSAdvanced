let mathEnforcer=require("../03.MathEnforcer").mathEnforcer;
let expect=require("chai").expect;

describe("MathEnforcer " ,function () {

    describe("addFive" ,function () {
        it("should return undefined for not a string",function () {//let expectedSum="even";
            let actualSum=mathEnforcer.addFive("pesho");
            expect(actualSum).to.be.undefined;
        });
        it("should return undefined for not an object",function () {
            //let expectedSum="even";
            let actualSum=mathEnforcer.addFive({name:"pesho"});
        expect(actualSum).to.be.undefined;
        });
        it("should return undefined for not an object",function () {
            //let expectedSum="even";
            let actualSum=mathEnforcer.addFive("5");
            expect(actualSum).to.be.undefined;
        });
        it("should return undefined for not an Empty",function () {
            //let expectedSum="even";
            let actualSum=mathEnforcer.addFive();
            expect(actualSum).to.be.undefined;
        });
        it("should return 10 for 5",function () {
            let expectedSum=10;
            let actualSum=mathEnforcer.addFive(5);
            expect(actualSum).to.be.equal(expectedSum);
        });
        it("should return 4 for -1",function () {
            let expectedSum=4;
            let actualSum=mathEnforcer.addFive(-1);
            expect(actualSum).to.be.equal(expectedSum);
        });
        it("should return 4 for -1",function () {
            let expectedSum=4.5+5;
            let actualSum=mathEnforcer.addFive(4.5);
            expect(actualSum).to.be.equal(expectedSum);
        });
        it("should return 4 for -1",function () {
            let expectedSum=-4.5+5;
            let actualSum=mathEnforcer.addFive(-4.5);
            expect(actualSum).to.be.equal(expectedSum);
        });
        it("should return 0 for -5",function () {
            let expectedSum=0;
            let actualSum=mathEnforcer.addFive(-5);
            expect(actualSum).to.be.equal(expectedSum);
        });
        it("should return 5 for 0",function () {
            let expectedSum=5;
            let actualSum=mathEnforcer.addFive(0);
            expect(actualSum).to.be.equal(expectedSum);
        });

    });
    describe("subtractTen" ,function () {
        it("should return undefined for not a string",function () {
            //let expectedSum="even";
            let actualSum=mathEnforcer.subtractTen("pesho");
            expect(actualSum).to.be.undefined;
        });
        it("should return undefined for not an object",function () {
            //let expectedSum="even";
            let actualSum=mathEnforcer.subtractTen({name:"pesho"});
            expect(actualSum).to.be.undefined;
        });
        it("should return -10 for  0",function () {
            let expectedSum=-10;
            let actualSum=mathEnforcer.subtractTen(0);
            expect(actualSum).to.be.equa;(expectedSum)
        });
        it("should return -10 for  -10",function () {
            let expectedSum=-20;
            let actualSum=mathEnforcer.subtractTen(-10);
            expect(actualSum).to.be.equa;(expectedSum)
        });
        it("should return 10 for  -10",function () {
            let expectedSum=-10;
            let actualSum=mathEnforcer.subtractTen(20);
            expect(actualSum).to.be.equa;(expectedSum)
        });
        it("should return 9.5 for  -10",function () {
            let expectedSum=-19.5-10;
            let actualSum=mathEnforcer.subtractTen(10);
            expect(actualSum).to.be.equa;(expectedSum)
        });

    });
    describe("Sum" ,function () {
        it("should return undefined for not a string",function () {
            //let expectedSum="even";
            let actualSum=mathEnforcer.sum("pesho",'gosho');
            expect(actualSum).to.be.undefined;
        });
        it("should return undefined for not a string",function () {
            //let expectedSum="even";
            let actualSum=mathEnforcer.sum("5",'5');
            expect(actualSum).to.be.undefined;
        });
        it("should return undefined for not a string",function () {
            //let expectedSum="even";
            let actualSum=mathEnforcer.sum("pesho",5);
            expect(actualSum).to.be.undefined;
        });
        it("should return undefined for not a string",function () {
            //let expectedSum="even";
            let actualSum=mathEnforcer.sum(5,"pesho");
            expect(actualSum).to.be.undefined;
        });
        it("should return undefined for not a string",function () {
            //let expectedSum="even";
            let actualSum=mathEnforcer.sum(5,'');
            expect(actualSum).to.be.undefined;
        });
        it("should return undefined for not a string",function () {
            //let expectedSum="even";
            let actualSum=mathEnforcer.sum(5,{name:"pesh"});
            expect(actualSum).to.be.undefined;
        });
        it("should return undefined for not a string",function () {
            let expectedSum=10;
            let actualSum=mathEnforcer.sum(5,5);
            expect(actualSum).to.be.equal(expectedSum);
        });
        it("should return undefined for not a string",function () {
            let expectedSum=0;
            let actualSum=mathEnforcer.sum(5,-5);
            expect(actualSum).to.be.equal(expectedSum);
        });
        it("should return undefined for not a string",function () {
            let expectedSum=-10;
            let actualSum=mathEnforcer.sum(-5,-5);
            expect(actualSum).to.be.equal(expectedSum);
        });
        it("should return undefined for not a string",function () {
            let expectedSum=4.5-5;
            let actualSum=mathEnforcer.sum(4.5,-5);
            expect(actualSum).to.be.equal(expectedSum);
        });
        it("should return undefined for not a string",function () {
            let expectedSum=4.5-5.5;
            let actualSum=mathEnforcer.sum(4.5,-5.5);
            expect(actualSum).to.be.equal(expectedSum);
        });
        it("should return undefined for not a string",function () {
            let expectedSum=4.5+5.5;
            let actualSum=mathEnforcer.sum(4.5,5.5);
            expect(actualSum).to.be.equal(expectedSum);
        });
        it("should return undefined for not a string",function () {
            let expectedSum=5;
            let actualSum=mathEnforcer.sum(0,5);
            expect(actualSum).to.be.equal(expectedSum);
        });
        it("should return undefined for not a string",function () {
            let expectedSum=5;
            let actualSum=mathEnforcer.sum(5,0);
            expect(actualSum).to.be.equal(expectedSum);
        });
        it("should return undefined for not a string",function () {
            let expectedSum=0;
            let actualSum=mathEnforcer.sum(0,0);
            expect(actualSum).to.be.equal(expectedSum);
        });

    });
});