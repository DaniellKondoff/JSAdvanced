let SortedList=require("./02.Sorted List").SortedList;
let expect=require("chai").expect;

describe('SortedList',function () {
    let myList={};
    beforeEach(function () {
        myList= new SortedList()
    });
    it("should have a constructor and prototypes",function () {
        expect(typeof SortedList).to.equal("function");
        expect(SortedList.prototype.hasOwnProperty('add')).to.be.equal((true),'There is no such prototype');
        expect(SortedList.prototype.hasOwnProperty('remove')).to.be.equal((true),'There is no such prototype')
        expect(SortedList.prototype.hasOwnProperty('get')).to.be.equal(true,'There is no such prototype')
        expect(SortedList.prototype.hasOwnProperty('size')).to.be.equal(true,'There is no such prototype')
    });
    it("should have a size property",function () {
        expect(myList.size).to.be.equal(0)
    });
    it("should have working add",function () {
       myList.add(5);
        expect(myList.size).to.be.equal(1)
    });
    it("should have working get",function () {
        myList.add(5);
        expect(myList.get(0)).to.be.equal(5)
    });
    it("should have working add and sort function",function () {
        myList.add(4);
        myList.add(3);
        myList.add(10);
        myList.add(1);
        expect(myList.get(0)).to.be.equal(1);
        expect(myList.get(1)).to.be.equal(3);
        expect(myList.get(2)).to.be.equal(4);
        expect(myList.get(3)).to.be.equal(10);
        expect(myList.size).to.be.equal(4)
    });
    it("should have working remove and sort function",function () {
        myList.add(4);
        myList.add(3);
        myList.add(10);
        myList.add(1);
        myList.remove(1);
        expect(myList.get(0)).to.be.equal(1);
        expect(myList.get(1)).to.be.equal(4);
        expect(myList.get(2)).to.be.equal(10);
        expect(myList.size).to.be.equal(3)
    });
    it("should not work with negative index",function () {
        myList.add(4);
        myList.add(3);
        myList.add(10);
        myList.add(1);
        myList.remove(1);
        expect(()=>myList.get(-1)).to.throw(Error);
        expect(()=>myList.remove(-1)).to.throw(Error);
    });
    it("should not work with outside index",function () {
        myList.add(4);
        myList.add(3);
        myList.add(10);
        myList.add(1);
        myList.remove(1);
        expect(()=>myList.get(10)).to.throw(Error);
        expect(()=>myList.remove(10)).to.throw(Error);
    });
    it("should not work with empty collection",function () {
        expect(() => myList.get()).to.throw(Error);
        expect(() => myList.remove()).to.throw(Error);
    });
});

