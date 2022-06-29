let x = 123e5; //write it instead of 123.(10^5)
let y = 123e-5; //write it instead of 123.(10^(-5))

//Interger Precision: Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
let z = 999999999999999; // z will be 999999999999999
let t = 9999999999999999; // t will be 1000000000000000

let m = 0.1;
let n = 0.2;
let p = m + n;
console.log(p); //The result will be 0.30000000000000004, because Floating point arithmetic is not always 100% accurate.
//To resolve the above case, use this way below:
let q = (m * 10 + n * 10) / 10;
console.log(q);

//JavaScript will try to convert strings to numbers in all numeric operations
let x1 = "100";
let x2 = "20";
let x3 = x1 / x2; //The result will be 5
let x4 = x1 * x2; //The result will be 2000
let x5 = x1 - x2; //The result will be 80
let x6 = x1 + x2; //The result will be 10020, because JavaScript use operator + to concentrate 2 strings.
console.log(x6);


//NaN - Not a Number
let x7 = 100 / "Apple";
console.log(x7); // The result will be NaN
isNaN(x7); // Return true
let x8 = 100 / "20";
console.log(x7); // The result will be 5

let x9 = NaN;
let x10 = 2;
let x11 = "2";
console.log(x9 + x10); // The result will be NaN
console.log(x9 + x11); // The result will be NaN5

//NaN is a number: typeof NaN returns number
typeof NaN; //Return number


//Infinity
let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
}

//Division by 0 also generate Infinity
let x12 = 2 / 0; //The result is Infinity
let x13 = -2 / 0; //The result is Infinity

typeof Infinity; //Return number


//Decimal: JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
let x14 = 0xFF;
console.log(x14); //The result will be 255


//Convert Decimal to Binary
let decimal32 = 32;
binary32 = decimal32.toString(2);
console.log(binary32);


//JavaScript Numbers as Objects:
let x15 = 123;
let x16 = new Number(123);
console.log(typeof x15); // return number
console.log(typeof x16); // return object
// --> WWhen using == operator, x15 and x16 are equal.
// --> WWhen using === operator, x15 and x16 are NOT equal.
// --> Comparing two JavaScript objects always returns false.


let x17 = 9.966;

console.log(x17.toString()); //x17 here is a string 9.966

console.log(x17.toExponential(2)); // The result will be 9.97e+0
console.log(x17.toExponential(4)); // The result will be 9.9660e+0
console.log(x17.toExponential(6)); // The result will be 9.966000e+0

console.log(x17.toFixed()); // The result will be 10
console.log(x17.toFixed(2)); // The result will be 9.97
console.log(x17.toFixed(4)); // The result will be 9.9660
console.log(x17.toFixed(6)); // The result will be 9.966000

console.log(x17.toPrecision()); // The result will be 9.966
console.log(x17.toPrecision(2)); // The result will be 10
console.log(x17.toPrecision(4)); // The result will be 9.966
console.log(x17.toPrecision(6)); // The result will be 9.96600


// The Number() Method
//Number() can be used to convert JavaScript variables to numbers:
Number(true); //Return 1
Number(false); //Return 0
Number("10"); //Return 10
Number("  10"); //Return 10
Number("10  "); //Return 10
Number(" 10  "); //Return 10
Number("10.33"); //Return 10.33
Number("10,33"); //Return NaN
Number("10 33"); //Return NaN
Number("John"); //Return NaN



// The Number() Method used on Dates: Number() can also convert a date to a number.
console.log(Number(new Date("1970-01-01"))); //Return 0 because The Number() method returns the number of milliseconds since 1.1.1970.
console.log(Number(new Date("1970-01-02"))); //Return the number of milliseconds between 1970-01-02 and 1970-01-01 (86400000)


//The parseInt() Method: parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
parseInt("-10"); //Return -10
parseInt("-10.33"); //Return -10
parseInt("10"); //Return 10
parseInt("10.33"); //Return 10
parseInt("10 20 30"); //Return 10
parseInt("10 years"); //Return 10
parseInt("years 10"); //Return NaN


//The parseFloat() Method: parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
parseFloat("10"); //Return 10
parseFloat("10.33"); //Return 10.33
parseFloat("10 20 30"); //Return 10
parseFloat("10 years"); //Return 10
parseFloat("years 10"); //Return NaN