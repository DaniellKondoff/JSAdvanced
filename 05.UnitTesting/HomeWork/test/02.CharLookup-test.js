/**
 * Created by Kondoff on 31-Oct-16.
 */
let lookupChar=require("../02.CharLookup").lookupChar;
let expect=require("chai").expect;

describe("lookupChar " ,function () {
    describe("return undefined lookUp" ,function () {
        it("should return undefined for not a string",function () {
            //let expectedSum="even";
            let actualSum=lookupChar(2,5);
            expect(actualSum).to.be.undefined;
        });
        it("should return undefined for not a string",function () {
            //let expectedSum="even";
            let actualSum=lookupChar('haha','hahah');
            expect(actualSum).to.be.undefined;
        });
        it("should return undefined for not a string",function () {
            //let expectedSum="even";
            let actualSum=lookupChar({name:'ivan'},5);
            expect(actualSum).to.be.undefined;
        });
    });
    describe("return Incorrect lookUp" ,function () {
        it("should return undefined for not corect string bigger vallue",function () {
            let expectedSum="Incorrect index";
            let actualSum=lookupChar('Ivan',2.4);
            expect(actualSum).to.be.undefined;
        });
        it("should return Incorrect index for not corect string bigger vallue",function () {
            let expectedSum="Incorrect index";
            let actualSum=lookupChar('Ivan',10);
            expect(actualSum).to.be.equal(expectedSum);
        });
        it("should return Incorrect index for not corect string equal vallue",function () {
            let expectedSum="Incorrect index";
            let actualSum=lookupChar('Ivan',5);
            expect(actualSum).to.be.equal(expectedSum);
        });
        it("should return Incorrect index for not corect string negative vallue",function () {
            let expectedSum="Incorrect index";
            let actualSum=lookupChar('Ivan',-10);
            expect(actualSum).to.be.equal(expectedSum);
        });
    });
    describe("return Incorrect lookUp" ,function () {
        it("should return correct for not corect string bigger vallue",function () {
            let expectedSum="v";
            let actualSum=lookupChar('Ivan',1);
            expect(actualSum).to.be.equal(expectedSum);
        });
    });
});
