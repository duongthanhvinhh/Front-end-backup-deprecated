/*
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)

Math.pow(x, y) returns the value of x to the power of y

Math.sqrt(x) returns the square root of x

Math.abs(x) returns the absolute (positive) value of x

Math.sin(x) & Math.cos(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
If you want to use degrees instead of radians, you have to convert degrees to radians:
Angle in radians = Angle in degrees x PI / 180.

Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments

Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

Math.log(x) returns the natural logarithm of x. The natural logarithm returns the time needed to reach a certain level of growth
*/

console.log(Math.round(4.4)); //4
console.log(Math.round(4.6)); //5

console.log(Math.ceil(4.4)); //5
console.log(Math.ceil(4.6)); //5
console.log(Math.ceil(-4.6)); //-4

console.log(Math.floor(4.4)); //4
console.log(Math.floor(4.6)); //4
console.log(Math.floor(-4.6)); //-5

console.log(Math.trunc(4.4)); //4
console.log(Math.trunc(4.6)); //4
console.log(Math.trunc(-4.6)); //-4

console.log(Math.sign(4.4)); //1
console.log(Math.sign(0)); //0
console.log(Math.sign(-4.6)); //-1

//Math.crbt(x) returns the cube root of x
console.log(Math.crbt(8)); //2
console.log(Math.crbt(64)); //4
console.log(Math.crbt(125)); //5

console.log(Math.pow(3, 2)); //Return 3^2  = 9

console.log(Math.sqrt(36)); //Return 6

console.log(Math.abs(-5.5)); //Return 3^2  = 9

console.log(Math.sin((90 * Math.PI) / 180)); //Return sine of 90 degrees = 1

console.log(Math.cos((60 * Math.PI) / 180)); //Return cos of 60 degrees = 1/2

console.log(Math.min(4, 33, -21, 59)); //Return -21
console.log(Math.max(4, 33, -21, 59)); //Return 59

console.log(Math.log(1)); //Return 0

//ES6 added the following parameters to the Number object:
console.log(Number.EPSILON); // Returns 2.220446049250313e-16
console.log(Number.MIN_SAFE_INTEGER); // Returns -9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // Returns 9007199254740991

console.log(Math.random()); //Return the random number between 0 and 1
//You the way below to random number in range 0 to 9(there are many ways to return 0-9, 0-10,0-100,1-10,...)
console.log(Math.floor(Math.random() * 10));

//There are 2 useful random functions as below:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
} //This JavaScript function always returns a random number between min (included) and max (excluded)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} //This JavaScript function always returns a random number between min and max (both included)

//Boolean Method:
console.log(Boolean(9 > 10)); //Return false
//Or easier way:
console.log(9 < 10); //Retrn true

//Conditional (Ternary) operator
const age = 11;
let result = age > 12 ? "Too young" : "Old enough";
console.log(result);

//Comparing different types:Comparing data of different types may give unexpected results.When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false.