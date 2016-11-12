/**
 * Created by Kondoff on 01-Nov-16.
 */
let sharedObject=require("../shared-object").sharedObject;
let expect=require("chai").expect;
let jsdom=require('jsdom-global')();
 $=require('jquery');

document.body.innerHTML=`<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

describe("Shared Object",function () {
    it("check name property, should start as null",function () {
       expect(sharedObject.name).to.be.equal(null,'Name dod not start with value null')
    });
    it("check name property, should start as null",function () {
        expect(sharedObject.income).to.be.equal(null,'Income dod not start with value null')
    });
    it('should be object', () => {
        expect(sharedObject).to.an('object');
    });
    it('should return null on testObject.income', () => {
        expect(sharedObject.income).to.equal(null);
        expect(sharedObject.name).to.equal(null);
    });

    it('should return null on testObject.income', () => {
        expect(sharedObject.income).to.equal(null);
        expect($('#income').val()).to.equal('');
        expect(sharedObject.name).to.equal(null);
        expect($('#name').val()).to.equal('');
    });

    describe("Change Name",function () {
        it("invaid parametars, should not change name property",function () {
            sharedObject.changeName("");
            expect(sharedObject.name).to.be.equal(null,'Name change incorrectly')
        });
        it("vaid parametars, should not change name property",function () {
            sharedObject.name="Pesho";
            sharedObject.changeName("");
            expect(sharedObject.name).to.be.equal("Pesho",'Name do not change')
        });
        it("vaid parametars, should not change name property",function () {
            sharedObject.changeName("Pesho");
            expect(sharedObject.name).to.be.equal("Pesho",'Name do not change')
        });
        it("vaid parametars, should not change name property",function () {
            let nameTextbox=$('#name');
            nameTextbox.val("Ivan");
            sharedObject.changeName("");
            expect(nameTextbox.val()).to.be.equal("Ivan",'Name do not change')
        });
        it("vaid parametars, should  change name property",function () {
            sharedObject.changeName("Pesho");
            let nameTextbox=$('#name');
            expect(nameTextbox.val()).to.be.equal("Pesho",'Name do not change')
        });


    });

    describe("Change Income",function () {
        it("invaid parametars, should not change income property",function () {
            sharedObject.income=130;
            sharedObject.changeIncome({name:"ivan"});
            expect(sharedObject.income).to.be.equal(130,'Income change incorrectly')
        });
        it("float pointing number, should not change income property",function () {
            sharedObject.income=130;
            sharedObject.changeIncome(3.14);
            expect(sharedObject.income).to.be.equal(130,'Income change incorrectly')
        });
        it("negative number, should not change income property",function () {
            sharedObject.income=130;
            sharedObject.changeIncome(-10);
            expect(sharedObject.income).to.be.equal(130,'Income change incorrectly')
        });
        it("zero, should not change income property",function () {
            sharedObject.income=130;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(130,'Income change incorrectly')
        });

        it("valid INT , should  change income property",function () {
            sharedObject.changeIncome(10);
            expect(sharedObject.income).to.be.equal(10,'Income did not change incorrectly')
        });

        it("invaid parametars, should not change income textbox",function () {
            let incomeTextBox=$('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome({name:"ivan"});
            expect(incomeTextBox.val()).to.be.equal('5','Income change incorrectly')
        });
        it("negative, should not change income textbox",function () {
            let incomeTextBox=$('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome(-5);
            expect(incomeTextBox.val()).to.be.equal('5','Income change incorrectly')
        });
        it("negative, should not change income textbox",function () {
            let incomeTextBox=$('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome(0);
            expect(incomeTextBox.val()).to.be.equal('5','Income change incorrectly')
        });

        it("valid INT , should  change income textBox",function () {
            sharedObject.changeIncome('10');
            let incomeTextBox=$('#income');
            incomeTextBox.val('10');
            expect(incomeTextBox.val()).to.be.equal('10','Income did not change incorrectly')
        });

    });

    describe('updateName',function () {
        it('invalid parameter should not change name property',function () {
            sharedObject.name="Pesho";
            let nameTextBox=$('#name');
            nameTextBox.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal("Pesho","Name change incorectly")
        });
        it('valid parameter should not change name property',function () {
            let nameTextBox=$('#name');
            sharedObject.name="Pesho";
            sharedObject.updateName();
            expect(sharedObject.name).to.equal("Pesho","Name change incorectly")
        })
    });

    describe('updateIncome',function () {
        it('invalid parameter should not change income property',function () {
            sharedObject.income=55;
            let incomeTextBox=$('#income');
            incomeTextBox.val('pesho');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55,"Name change incorectly")
        });

        it('floating point should not change income property',function () {
            sharedObject.income=55;
            let incomeTextBox=$('#income');
            incomeTextBox.val('3.14');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55,"Name change incorectly")
        });
        it('negativ should not change income property',function () {
            sharedObject.income=55;
            let incomeTextBox=$('#income');
            incomeTextBox.val('-3');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55,"Name change incorectly")
        });
        it('zero should not change income property',function () {
            sharedObject.income=55;
            let incomeTextBox=$('#income');
            incomeTextBox.val('');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55,"Name change incorectly")
        });

        it('valid string should  change income property',function () {

            let incomeTextBox=$('#income');
            incomeTextBox.val('150');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(150,"Name change incorectly")
        })

    })



});