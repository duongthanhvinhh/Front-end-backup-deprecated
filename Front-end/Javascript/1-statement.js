// //statement in Javascript like below:
// let x, y, z;
// x = 5;
// y = 6;
// z = x + y;
// console.log(t);
// let t = 4; //Here console show error, because t is used before declared.

// //The specific of declaring variable with var type
// // Input:
// console.log(x);
// var x = 5;
// console.log(x);
// // Output:
// undefined
// 5




// Variables defined with
// let cannot be Redeclared.
// Variables defined with
// let must be Declared before use.
// let x = 5;
// I will be executed
// x = 6;
// I will NOT be executed
// Variables defined with
// let have Block Scope.Variables declared inside a {}
// block cannot be accessed from outside the block.For example: {
//     let x = 1;
// }
// So x can NOT be used here.If var x = 1;
// x can be used here.



// If you re - declare a JavaScript variable declared with
// var, it will not lose its value.You cannot re - declare a variable declared with
// let or
// const.This will not work.
// var carName = "Volvo";
// var carName;





// let x = "5" + 2 + 3;
// The result will be 523
// let x = 2 + 3 + "5";
// The result will be 55

// Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:
//     Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:
//     let _x = "Hello World";
// let $$$ = 2;
// let $myMoney = 5;
// let y = _x + $$$ + $myMoney;
// The result will be Hello World25


// Do not use the following keyworks of Javascript as a variable: var,
//     let,
//     const,
//     if,
// switch,
// for,
// function,
// return,
// try.



// A JavaScript name must begin with:
//     A letter(A - Z or a - z)
// A dollar sign($)
// Or an underscore(_)



// Const /
//     const array can not be redeclared, but you can add or change element
// You can create a constant array:
//     const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
//     cars[0] = "Toyota";
// You can add an element:
//     cars.push("Audi");




// // Create an object:
// const car = { type: "Fiat", model: "500", color: "white" };
// // Change a property:
// car.color = "red";
// // Add a property:
// car.owner = "Johnson";



// Exponentiation
// let x = 5;
// let z = x ** 2; // result is 25
// Exponentiation the same as Math.pow(x, y)
// let x = 5;
// let z = Math.pow(x, 2); // result is 25





// let y = 123e5;
// means 123 x 10 ^ 5
// let z = 123e-5;
// means 123 x 10 ^ (-5)



// let x = 5;
// let y = 5;
// let z = 6;
// console.log((x == y)); // Returns true
// console.log((y == z)); // Returns false


// Hosting: Use the variable before declare it(Class are not hoisted).


// const array
// const cars = ["Saab", "Volvo", "BMW"];


// Javascript Object
// const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }; //type Object


// typeof "5" //returns string
// console.log(typeof 5) //returns number
// let car;
// console.log(typeof car); // Value is undefined, type is undefined
// let car = "";
// console.log(typeof car); // The value is "", the typeof is "string"




// Function

// function nameFunction(parameter1, parameter2, parameter3) {
//     // code to be executed
// }






// //Seem this infor below not correct from W3school
// A variable created without a declaration keyword(var,
//     let or
//     const) are always global, even
// if they are created inside a

// function.
// function myFunction() {
//     x = 5;
// }
// console.log(x);