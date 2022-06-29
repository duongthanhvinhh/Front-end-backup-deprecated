let string = "Hello World";
let string1 = string.toUpperCase();
let string2 = string.toLowerCase();
console.log(string1);
console.log(string2);

let string3 = string2.concat(" ", "I'm vinh!");
console.log(string3);

let string4 = string.trim(); //trim() to delete all whitespace in the string.
console.log(string);


// padStart() and padEnd() in String:
let text = "2";
let padStart = text.padStart(3, "x"); //The output will be xx2.
let padEnd = text.padEnd(3, "0"); //The output will be 200.
console.log(padStart + " " + padEnd);

/* The padStart and padEnd are string method. To pad a number, convert the number to a string first.*/
var text1 = 5;
var text1 = text1.toString();
let padStart1 = text1.padStart(5, "x"); //The output will be xx2.
let padEnd1 = text1.padEnd(5, "0"); //The output will be 200.
console.log(padStart1 + " " + padEnd1);