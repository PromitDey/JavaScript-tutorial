let score = undefined;
//console.log(typeof (score));

let convertToNumber = Number(score);
//console.log(typeof (convertToNumber));
//console.log(convertToNumber);

//"33" => o/p - 33, typeof - number
//"33abc" => o/p - NaN(not a number), typeof - number
//"null" => o/p - 0, typeof - number
//"undefined" => o/p - NaN, typeof - number
//"True" => o/p - 1, typeof - number

//Boolean Conversion
let loggedIn = 1;
//console.log(loggedIn);

let convertToBool = Boolean(loggedIn);
//console.log(convertToBool);

//"1" => True
//"2" => false
//"" => false
//"Promit" => true

//Number -> String
let someNumber = 33;
console.log(someNumber);
console.log("Before Conversion - ", typeof(someNumber));

let convertToString = String(someNumber);
console.log(convertToString);
console.log("After Conversion - ", typeof(convertToString));

//"33" => changed the typeof to string but the o/p remains the same both after and before
