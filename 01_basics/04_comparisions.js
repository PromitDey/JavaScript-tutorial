// console.log(2 > 1); //o/p - true
// console.log(2 < 1); //o/p - false
// console.log(2 >= 1); //o/p - true
// console.log(2 <= 1); //o/p - false
// console.log(2 != 1); //o/p - true
// console.log(2 == 1); //o/p - false

//ALWAYS AVOID BELOW TYPES OF COMPARISONS

// console.log(null > 0); //falses
// console.log(null == 0); //false
// console.log(null >= 0); //true

//The reason is that an equality check "==" and comparisons ">" "<" ">=" "<=" works differently !!
//Comparisons convert null to a number, treating it as 0
//That's why 
//console.log(null > 0); in this null gets converted to 0 and 0 > 0 is false
//console.log(null >= 0); in this null gets converted to 0 ans 0 >= 0 is true
//console.log(null == 0); it returns false because it doesn't convert 

//but in case if we compare to "undefined" with any operation it will return flase no matter what !!
// console.log(undefined > 0); //falses
// console.log(undefined == 0); //false
// console.log(undefined >= 0); //false

//in Js equality check and comparison checks are different

//strict check(===) - it not only checks the value but also checks the dataType also

console.log("2" == 2); //it converts the entire thing to string and returns true
console.log("2" === 2); //strict check doesn't allows to convert anything thus it will return false