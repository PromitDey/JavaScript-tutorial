let name = "Promit";
let phoneNo = 7001674772;

//console.log(name + "'s phone no is - " + phoneNo); //backdated syntax

//console.log(`My name is ${name} and My phone no is ${phoneNo}`); //modern way and increases code readability

const gameName = new String('promit-Rony-dey');

console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('R'));

// const newStirng = gameName.substring(0, 4); //we can't use negative index values in substr function
// console.log(newStirng);

// const anotherString = gameName.slice(-11, 5); //we can use negative index values in slice function
// console.log(anotherString);

// const newStirng1 = "    promit";
// console.log(newStirng1); 
// console.log(newStirng1.trim()); //it removes the white space characters and line terminators from both start and end

// const url = "https://xyz.com/1%20website";
// console.log(url.replace('%20', '-')); 

// console.log(url.includes('abc'));

console.log(gameName.split('-'));