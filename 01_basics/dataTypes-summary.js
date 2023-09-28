/* 

JavaScript is Dynamically Typed
for Ex : const score = 100; we never declared that score is a number type variable JS did it by its own

Primitive DataTypes
These type of datatypes are call by value

Types :
String, Number, Boolean, null, undefined, Symbol, BigInt
Examples :

const score = 100; //Number
const name = "XYZ"; //String
const isLoggedIn = false; //Boolean
const outsideTemp = null; //null
const userEmail; //undefined
//Symbol
const id = Symbol('123'); 
const anotherId = Symbol('123');
Seems like both of them are equal but no they are not equal
console.log(id === anotherId); //it returns false
const bigNumber = 344444444555555566n; //BigInt

Non-Primitive DataTypes or Reference DataTypes
These type of datatypes are call by reference

Types :
Arrays, Object, 
Examples : 

const cars = ["Audi", "Ferrari", "Mclaren"]; //arrays

let myObj = {
    name : "Promit",
    age = 22,
} //objects

//Functions
const myFunction = function(){
    console.log("Promit");
}

consol.log(typeof(score)); //to find datatype of any variable we use the keyword "typeof"
More about "typeof" - https://262.ecma-international.org/5.1/#sec-11.4.3

*/