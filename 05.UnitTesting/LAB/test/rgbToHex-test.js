/**
 * Created by Kondoff on 30-Oct-16.
 */
let rgbToHexColor=require("../rgbToHex-check").rgbToHexColor;
let expect=require("chai").expect;

describe("rgbToHexColor(red, green, blue)", function() {
    describe("Nominal cases (valid input)", function() {
        it("should return #FF9EAA on (255, 158, 170)", function() {
            let hex = rgbToHexColor(255, 158, 170);
            expect(hex).to.be.equal('#FF9EAA');
        });
        it("should return #0C0D0E on (12, 13, 14)", function() {
            let hex = rgbToHexColor(12, 13, 14);
            expect(hex).to.be.equal('#0C0D0E');
        });
        it("should return #000000 on (0, 0, 0)", function() {
            let hex = rgbToHexColor(0, 0, 0);
            expect(hex).to.be.equal('#000000');
        });
        it("should return #FFFFFF on (255, 255, 255)", function() {
            let hex = rgbToHexColor(255, 255, 255);
            expect(hex).to.be.equal('#FFFFFF');
        });
    });

    describe("Spaces cases (valid input)", function() {
        it("should return undefined on (-1, 0, 0)", function() {
            let hex = rgbToHexColor(-1, 0, 0);
            expect(hex).to.be.undefined;
        });
        it("should return undefined on (256, 0, 0)", function() {
            let hex = rgbToHexColor(256, -0, -0);
            expect(hex).to.be.undefined;
        });
        it("should return undefined on (3.14, 0, 0)", function() {
            let hex = rgbToHexColor(3.14, -0, -0);
            expect(hex).to.be.undefined;
        });
        it("should return undefined on (pesho)", function() {
            let hex = rgbToHexColor("pesho");
            expect(hex).to.be.undefined;
        });
        it("should return undefined on (0)", function() {
            let hex = rgbToHexColor(0);
            expect(hex).to.be.undefined;
        });
        it("should return undefined on (0,34)", function() {
            let hex = rgbToHexColor(0,34);
            expect(hex).to.be.undefined;
        });
        it("should return undefined on ([])", function() {
            let hex = rgbToHexColor([]);
            expect(hex).to.be.undefined;
        });

    });

});
