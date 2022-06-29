/* 
JavaScript supports different kinds of loops:
    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true
*/

//Example, print all numbers in range 1 to 10:
for (let i = 1; i <= 10; i++) {
    console.log(i + "\n");
}

//You can initiate many values in statement 1(separated by comma):
let string = "Hello world";
for (let i = 0, len = string.length; i <= len; i++) {
    console.log(i + "\n");
}

//You can omit statement 1(like when your values are set before the loop start):
let i = 10;
for (; i <= 20; i += 2) {
    console.log(i + "\n");
}

//You can omit statement 3(like when you increment your values inside the loop):
let j = 10;
for (; j <= 20;) {
    console.log(j + "\n");
    j += 3;
}

//Loop scope:
let a = 10;
for (let a = 3; a < 20; a++) {

} //Here a = 10;Because a was declared by "let" type.
console.log("a value is: " + a);
var b = 10;
for (var b = 3; b < 20; b++) {

} //Here a = 20;Because a was declared by "var" type.
console.log("b value is: " + b);



//-------------------------Example for in object-------------------------//
/*
for(key in object){
    //code block to be executed
}
*/
const person = {
    name: "vinh",
    age: 24,
    hometown: "Quang Ngai"
}
let text = "";
for (let i in person) {
    text += person[i] + "\n";
}
console.log(text);

//-------------------------Example for in over arrays-------------------//
/*
for (variable in array) {
    //code block to be executed
}
*/
const number = [3, 44, 2, 00, 99];
let result = "";
for (let x in number) {
    result += number[x] + "\n";
}
console.log(result);



//------------------------------Array.forEach()--------------------------//
//Use array number above
let result1 = "";
number.forEach(myFunction);
console.log(result1 + "\n");

function myFunction(value) {
    result1 += value;
}




//------------------------------The For Of Loop---------------------------//
/*
The Javascript statement loops through the values of an object

for (variable of iterable) {
  // code block to be executed
}

For/of was added to JavaScript in 2015 (ES6), not supported in Internet Explorer
*/
//-------Looping over an array-------------//
const names = ["vinh", "viet", "nghia"];
let aName = "";
for (let x of names) {
    aName += x + "\n";
}
console.log(aName);

//---------Looping over a string-------------//
let language = "Javascript";
let nn = "";
for (let x of language) {
    nn += x + "\n";
}
console.log(nn);

//---------------------------While Loop-----------------------------------//
/*
while (condition) {
  // code block to be executed
}
*/
let aAge = "";
let age = 24;
while (age < 30) {
    aAge += "The number is " + age + "\n";
    age++;
}
console.log(aAge);


//---------------------------Do While Loop-----------------------------------//
/*
do{
    //code block to be executed
}
while (condition);

Note: The code block will be executed before check the condition
*/
let variableA = 5;
let text3 = "";
do {
    text3 += "This number is " + variableA;
    variableA++;
}
while (a < 4);
console.log(text3);

//
const color = ["red", "green", "blue"];
let count = 0;
let aColor = "";
while (color[count]) {
    aColor += color[count] + "\n";
    count++;
}
console.log(aColor);
//The same as:
let count1 = 0;
let bColor = "";
for (; color[count1];) {
    bColor += color[count1] + "\n";
    count1++;
}
console.log(bColor);