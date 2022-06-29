let fruits = ["banana", "orange", "coconut"];
console.log(isArray(fruits));

function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1
}
/*
Or even simpler, you can check if the object is an Array function:
function isArray(myArray){
    return myArray.constructor === Array;
}
*/