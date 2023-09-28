let value = 3;
let negValue = -value;
//console.log(negValue);

// console.log(2+2); //o/p - 4
// console.log(2-2); //o/p - 0
// console.log(2*2); //o/p - 4
// console.log(2**3); //o/p - 8
// console.log(2/3); //o/p - 0.66666
// console.log(2%3); //o/p - 2

let str1 = "hello";
let str2 = "Promit";
let str3 = str1 + str2;
//console.log(str3);

// console.log("1" + 2); //o/p - 12
// console.log(1 + "2"); //o/p - 12
// console.log("1" + 2 + 2); //o/p - 122
// console.log(1 + 2 + "2"); //o/p - 32 because js treats the first input as primary 

// console.log(3 + 4 * 5 % 3); //good for theory but decreases code readability
// console.log((3 + 4) * 5 % 3); //used for practical knowledge uses code readabitlity

//not a good practice
// console.log(+true); //o/p - 1, it converts it to number value
// console.log(+""); //o/p - 0, it converts it to int from string as its a empty string so gives o/p 0

let num1, num2, num3;
num1 = num2 = num3 = 2+2; //not efficient

let gameCounter = 100;
console.log(++gameCounter); //here it increases and then prints the value so o/p - 101
console.log(gameCounter++); //here it prints then increases so o/p - 101
console.log(gameCounter); //here it just prints the value that was updated in last line so o/p - 102

