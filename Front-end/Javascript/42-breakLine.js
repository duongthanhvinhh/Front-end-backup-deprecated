//Breaking a statement in the middle of a string will not work:
// let x = "Hello
// World!";

//You must use a "backslash" if you must break a statement in a string:
let y = "Hello \
World!";

//Breaking a Return Statement: Javascript automatic close a statement at the end of a line, so we will have the same result in two examples below:
//Example 1:
function myFunction1(x) {
    let power = 10;
    return x * power;
}
//Example 2:
function myFunction2(x) {
    let power = 10;
    return x * power;
}

//Javascript does not support Named Indexes, like:
const person = [];
person[firstName] = "vinh";