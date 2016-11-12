/**
 * Created by Kondoff on 30-Oct-16.
 */
let sum=require("../sum-array").sum;
let expect=require("chai").expect;

describe("sum(arr)",function () {
    it("should return 3 for [1,2]",function () {
        let expectedSum=3;
        let actualSum=sum([1,2]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it("should return 1 for [1]",function () {
        let expectedSum=1;
        let actualSum=sum([1]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it("should return 0 for []",function () {
        let expectedSum=0;
        let actualSum=sum([]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it("should return invalid datafor [pesho]",function () {
        let expectedSum=0;
        let actualSum=sum('pesho');
        expect(actualSum).to.be.NaN;
    });
    it("should return 0 for [pesho]",function () {
        let expectedSum=3;
        let actualSum=sum([1.5,2.5,-1]);
        expect(actualSum).to.be.equal(expectedSum);
    });
});




