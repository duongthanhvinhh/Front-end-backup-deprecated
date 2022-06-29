let str = "The rain in SPAIN stays mainly in the plain";
console.log(str.match(/ain/g)); //The output will be --> ain ain ain  //g --> global
console.log(str.match(/ain/gi)); //the output will be --> ain AIN ain ain  //gi --> global insensetive
console.log(str.includes("SPAIN")); //Return true or false 
console.log(str.includes("SPAIN", 13)); //Check if a string includes "SPAIN" or not, starting the search at position 13
console.log(str.includes("TMA")); //Return true of false

console.log(str.startsWith("The")); //return true
console.log(str.startsWith("in", 2)); //reutrn false
console.log(str.endsWith("plain")); //return true
console.log(str.endsWith("in", 11));



/*
includes, startsWith and endsWith are ES6 feature (Javascript 2015) and they are not supported in Internet Explorer
*/