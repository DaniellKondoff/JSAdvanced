/**
 * Created by Kondoff on 12-Nov-16.
 */
let list=require("./02. Add_Delete in ListEX").list;
let expect=require("chai").expect;

function solve() {
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    }
}

describe('ListTest',function () {
    let list={};
    beforeEach(function () {
        list=solve()
    });

    describe('Type of List',function () {
        it('should have function type',function () {
            expect(typeof list.add).to.equal("function");
        });
        it('should have function type',function () {
            expect(typeof list.delete).to.equal("function");
        });
        it('should have function type',function () {
            expect(typeof list.toString).to.equal("function");
        });
    });

    describe("Add function",function () {
        it("Empty Input",function () {
            expect(list.toString()).to.equal('');
        });
        it("Single Input",function () {
            list.add(1);
            expect(list.toString()).to.equal('1');
        });
        it("Multiply Input",function () {
            list.add(1);
            list.add("two");
            list.add(3);
            expect(list.toString()).to.equal('1, two, 3');
        });
    });

    describe("Delete function",function () {
        it("Single Input",function () {
            list.add(1);
            list.delete(0);
            expect(list.toString()).to.equal('');
        });
        it("Multiply Input",function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.delete(1);
            expect(list.toString()).to.equal('1, 3');
        });
        it('Negative input',function () {
            list.add(1);
            expect(list.delete(-1)).to.equal(undefined);
        });
        it('Bigger input than lenght',function () {
            list.add(1);
            expect(list.delete(2)).to.equal(undefined);
        });
        it('Bigger input than lenght',function () {
            list.add(1);
            expect(list.delete(3,15)).to.equal(undefined);
        });
    })
});