/**
 * Created by Kondoff on 31-Oct-16.
 */
let isOddOrEven=require("../01.isOdd").isOddOrEven;
let expect=require("chai").expect;

describe("isOddOrEven" ,function () {
    describe("return undefined" ,function () {
        it("should return undefined for not a string",function () {//not a string
            //let expectedSum="even";
            let actualSum=isOddOrEven(2);
            expect(actualSum).to.be.undefined;
        });
        it("should return undefined for not an object",function () { //object
            //let expectedSum="even";
            let actualSum=isOddOrEven({name:'pesho'});
            expect(actualSum).to.be.undefined;
        });
    });

    describe("return Evven" ,function () {
        it("should return undefined for not a string",function () {
            let expectedSum="even";
            let actualSum=isOddOrEven("even");
            expect(actualSum).to.be.equal(expectedSum);
        });
    });
    describe("return Evven" ,function () {
        it("should return undefined for not a string",function () {
            let expectedSum="odd";
            let actualSum=isOddOrEven("odd");
            expect(actualSum).to.be.equal(expectedSum);
        });
    });
});
