/**
 * Created by Kondoff on 29-Oct-16.
 */
function solve() {
    let obj = {};
    obj.extend=function (template) {
        for(let prop in template){
            console.log(prop)
            console.log(obj[prop]);
            console.log(template[prop])

        }
    }

    return obj
}

var template = {
    extensionMethod: function () { console.log("From extension method")},
    extensionProperty: 'someString'
};

let myObj=solve();

myObj.extend(template);