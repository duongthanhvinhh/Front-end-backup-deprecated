/*Back-Tics Syntax  ``
    Template Literals use back-ticks (``) rather than the quotes ("") to define a string
    let text = `Hellow World`;
*/

let string = `Hello "World"`; //Can use both single and double quote inside a string with Back-Tics Syntax ``

let multipleline =
    `Line 1
    Line 2
    Line 3
    Line 4`; //Can define a string in multiple lines with Back-Tics Syntax ``




//String interpolation: Template literals provide an easy way to interpolate variables and expressions into strings.

//Variable substitutions
let firstName = "Duong";
let lastName = "Vinh";
let string1 = `Hello ${firstName} ${lastName}`;
console.log(string1);

//Expression Substitution
let namSinh = "1999";
let currentYear = "2022";
let string2 = `You are ${(currentYear-namSinh).toFixed(3)}`; //.toFixed(x) --> lay x chu so phan thap phan.
console.log(string2);