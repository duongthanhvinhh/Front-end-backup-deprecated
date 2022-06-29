// Compute total of 2 numbers
let x = 4,
    y = 5;
let total = totalofthem(x, y)

function totalofthem(x, y) {
    return x + y;
}
console.log(total);


//Convert `F sang `C:
function convertFtoC(f) {
    return (5 / 9) * (f - 32);
}
console.log(convertFtoC(77)); //If we use console.log(convertFtoC) , the program will return function instead of the result