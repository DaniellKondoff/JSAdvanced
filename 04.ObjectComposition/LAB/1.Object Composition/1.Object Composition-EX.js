/**
 * Created by Kondoff on 27-Oct-16.
 */
let student= {
    firstName:'Maria',
    lastName:'Green',
    age: 22,
    location: { lat: 42.698, lng: 23.322 }

};

//console.log(student);
//console.log(student.location.lat);

//Composing Objects

let name='Sofia';
let population=123456;
let country ='Bulgaria';
let town = {
    name, population, country
}

console.log(town);
town.location={ lat: 42.698, lng: 23.322 }; //add
console.log(town)
