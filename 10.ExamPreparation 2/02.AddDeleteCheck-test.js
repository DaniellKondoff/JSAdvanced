
let list=require("./02.AddDeleteCheck-test").list;
let expect=require("chai").expect;

function produce(){
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
    };
}

describe('list',function () {
   // let list={};
   // beforeEach(function () {
   //    list=produce()
   // });

    describe('functionns',function () {
        it("should have own property add and function",function () {
            expect(typeof list.add).to.equal('function')

        });
        it("should have own property delete and function",function () {
            expect(typeof list.delete).to.equal('function');

        });
        it("should have own property toString and function",function () {
            expect(typeof list.toString).to.equal('function');

        });
    });


    describe("add",function () {
        it("should list empty",function () {
            expect(list.toString()).to.equal('');
        });
        it("should list 1",function () {
            list.add(1);
            expect(list.toString()).to.equal('1');
        });
        it("should list 1",function () {
            list.add(1);
            list.add("two");
            list.add(3);
            expect(list.toString()).to.equal('1, two, 3');
        });
        it("should list Ivan",function () {
            list.add("Ivan");
            expect(list.toString()).to.equal('Ivan');
        });
    });


    describe("delete",function () {
        it('should delete correct value',function () {
            list.add("Ivan");
            list.delete(0);
            expect(list.toString()).to.equal('');
        });
        it("should delete second element 1",function () {
            list.add(1);
            list.add("two");
            list.add(3);
            list.delete(1);
            expect(list.toString()).to.equal('1, 3');
        });
        it('should return undifined with string',function () {
            expect(list.delete('pesho')).to.equal(undefined);
        });
        it('should return undifined with float',function () {
            expect(list.delete(3.14)).to.equal(undefined);
        });
        it('with float should not delete any elements',function () {
            list.add(15);
            list.delete(3.14);
            expect(list.toString()).to.equal('15');
        });
        it('with zero should and no items in list ',function () {
            expect(list.delete(0)).to.equal(undefined);
            expect(list.toString()).to.be.equal('')
        });
        it('with zero should and no items in list ',function () {
            list.add('three')
            expect(list.delete(-2)).to.equal(undefined);
            expect(list.toString()).to.be.equal('three')
        });
        it('with index equal of the lenght the list should not delete ',function () {
            list.add(1);
            list.add('pesho');
            expect(list.delete(2)).to.equal(undefined);
            expect(list.toString()).to.be.equal('1, pesho')
        });
        it('with float should not delete any elements',function () {
            list.add(15);
            list.add(10);
            list.add(16);
            expect(list.delete(2)).to.equal(16);
        });
        it('with float should not delete any elements',function () {
            list.add(15);
            list.add(10);
            list.add(16);
            list.delete(1);
            expect(list.toString()).to.equal('15, 16');
        });
        it('with float should not delete any elements',function () {
            list.add(15);
            list.add(10);
            list.add(16);
            list.add(21);
            list.delete(3);
            expect(list.toString()).to.equal('15, 10, 16');
        });
    })
});