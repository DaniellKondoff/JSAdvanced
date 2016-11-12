/**
 * Created by Kondoff on 12-Nov-16.
 */
let SortedList=require("./02.Sorted List").SortedList;
let expect=require("chai").expect;

describe('SortedList',function () {
    let myList={};
    beforeEach(function () {
        myList= new SortedList()
    });
    describe('Type of List',function () {
        it('should have function type',function () {
            expect(typeof SortedList).to.equal("function");
        })
    });
    describe('Type Have own properties',function () {
        it('should have property add ',function () {
            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
        });
        it('should have property remove ',function () {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
        });
        it('should have property get ',function () {
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
        });
        it('should have property size ',function () {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
        });
        it('should have property size ',function () {
            expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.equal(true);
        });
        it('should have property size ',function () {
            expect(SortedList.prototype.hasOwnProperty('sort')).to.equal(true);
        });
    });
    describe('Add function testing',function () {
       it('should has 0 seze',function () {
           expect(myList.size).to.be.equal(0)
       });
        it("should have working add function",function () {
            myList.add('pesho');
            expect(myList.size).to.equal(1);
        });
        it("should have working add and sorting function",function () {
            myList.add(5);
            myList.add(4);
            myList.add(10);
            expect(myList.get(0)).to.equal(4);
            expect(myList.get(1)).to.equal(5);
            expect(myList.get(2)).to.equal(10);
            expect(myList.size).to.be.equal(3)
        });
    });
    describe("Remove function testing",function () {
       it('should remove correct incdex',function () {
           myList.add(5);
           myList.add(4);
           myList.add(10);
           myList.remove(0);
           expect(myList.get(0)).to.equal(5);
           expect(myList.get(1)).to.equal(10);
       });
        it('should return Error testing with empty list',function () {
            expect(()=>myList.get(0)).to.throw(Error);
            expect(() => myList.remove()).to.throw(Error);
        });
        it('should return Error testing with negative index',function () {
            myList.add(2);
            myList.add(5);
            myList.remove(0);
            expect(()=>myList.get(-1)).to.throw(Error);
        });
        it('should return Error testing with index outside the bound',function () {
            myList.add(2);
            myList.add(5);
            myList.remove(0);
            expect(()=>myList.get(5)).to.throw(Error);
        });
    })
});