function sum(...elements) {
    let sum = 0;
    for (let element of elements) {
        sum += element;
    }
    return sum;
}
let x = sum(3, 45, 6, 22, 8);
console.log(x);

//Array.from() returns an array object from any object with a length property or any iterable object
const string = "javascript";
const from = Array.from(string);
console.log(from);