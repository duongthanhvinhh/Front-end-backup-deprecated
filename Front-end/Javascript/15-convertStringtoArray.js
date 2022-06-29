let string = "A,B,C,D,E";
let array = string.split(",");
console.log("The array is:\n")
for (let i = 0; i < array.length; i++) {
    console.log(array[i] + "\n");
}
let array1 = string.split(); //The returned array will contain the whole string in index [0]
console.log("The first element of the array1 is:\n")
console.log(array1[0]);
// console.log(array1[1]); This will return "Undefined"
let array2 = string.split(""); //The returned array will be an array of single characters
console.log("The array2 is:\n")
for (let i = 0; i < array2.length; i++) {
    console.log(array2[i] + "\n");
}