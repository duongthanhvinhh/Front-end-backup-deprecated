//array
const array = ["vinh", "Demo", "Official"];
array.push("priority");
array[array.length] = "Low";
console.log(array);

//object
const vinhobj = {
    firstName: "Duong",
    lastName: "Vinh"
};
console.log(vinhobj.firstName); //Return Duong

//array
const exercises = [
    "exercise1",
    "exercise3",
    "exercise2"
]
exercises.sort();
console.log(exercises);

const array1 = new Array("name1", "name2", "name3");
console.log(array1);
//the other way to create an array
const friend = [];
friend[0] = ["Nghia"];
friend[1] = ["Viet"];
friend[3] = ["Thanh"]; //No se lam cho friend[2]=Undefined
friend[4] = ["Tai"];
for (let i = 0; i < friend.length; i++) {
    console.log(friend[i] + "\n");
}


//To check wheter is an array or not:   Array.isArray("name_array");
//                                  Or  name_array instanceof Array; //If return true, It's an array.



//To Convert Array to String:
//toString() Method
const array2 = new Array("element1", "element2", "element3");
console.log(array2.toString());

//join() Method: behaves just like toString(), but in addition you can specify the separator.
console.log(array2.join(""));



//poping: pop() Method removes the last element from an array
console.log("pop section");
const array3 = new Array("element1", "element2", "element3");
console.log(array3.pop()); //The result is "element3"
console.log(array3); //The result is "element1" "element2"

//poping: push() Method removes the last element from an array
console.log("push section");
const array4 = new Array("element1", "element2", "element3");
console.log(array4.push("element4")); //The result is "element3"
console.log(array4); //The result is "element1" "element2" "element3" "element4"


//shilf: shilf() Method removes the first element from an array
console.log("shift section");
const array5 = new Array("element1", "element2", "element3");
// array5.shift(); to Remove the first element.
console.log(array5.shift()); //Return "element1"
console.log(array5); //The result is "element2" "element3" (These 2 elements will be in the first and second position)


//unshilf: unshilf() Method removes the last element from an array
const array6 = new Array("element1", "element2", "element3");
console.log(array6.unshift("element4")); //The result is "element3"
console.log(array6); //The result is "element4" "element1" "element2" "element3"

delete array6[0];
console.log(array6); //The result will be "undefined" "element1" "element2" "element3"



// Merging Arrays:
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
//Merging an Array with values
const myChildren1 = arr1.concat("Peter");


// Splicing and slicing Arrays
// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.
console.log("This is splice and slice section");
const alo = ["Usera", "Userb", "Userc", "Userd"];
let removed = alo.splice(1, 2, "Usera1", "Usera2"); //at index 1, remove 2 elements and insert 2 element Usera1 and Usera2 to array
console.log(alo);
console.log(removed);
alo.splice(1, 1);
console.log(alo);


const hello = ["hello1", "hello2", "hello3"];
const cut_hello = hello.slice(1, 3); // From index 1 , to index 3-1,all output dumped to array cut_hello



//Sort an array, Reverse an array
const myArray = ["Element1", "Element3", "Element2"];
myArray.sort();
myArray.reverse(); //To reverse array
console.log(myArray);
//Numeric sort, because sort Method sorts array based on string ,the first character of each element, then It will produce an in correct result with numeric, i.e 2>13 because 2>1. Thats' why we must to use numeric sort in this case.
const numericArray = [1, 4, 23, 5, 47, 99];
numericArray.sort(function(a, b) { return a - b });
console.log(numericArray);


//Sorting an array in random order: The Fisher Yates Method
const randomOrder = [1, 4, 32, 9, 66, 67, 58, 100];
for (let i = randomOrder.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = randomOrder[i];
    randomOrder[i] = randomOrder[j];
    randomOrder[j] = k;
}
console.log(randomOrder);

//To find Max/Min element in array, sort array from 0->....,
//Another way to find is use loop while
const loopWhile = [1, 4, 32, 9, 66, 67, 58, 100];

function findMin(arr) {
    let len = arr.length;
    let min = arr[len - 1];
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}
console.log(findMin(loopWhile));

function findMax(arr) {
    let len = arr.length;
    let max = arr[len - 1];
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}
console.log(findMax(loopWhile));



//Sorting Object array
const employees = [
    { name: "Vinh", ages: 24 },
    { name: "Nghia", ages: 23 },
    { name: "Viet", ages: 37 }
]

//Sort by ages
let sortAges = employees.sort(function(a, b) { return a.ages - b.ages });
console.log(sortAges);
//sort by name
let sortName = employees.sort(function(a, b) {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
})
console.log(sortName);



//Print out all array elements using forEach:
const print_out = ["line 1", "line 2", "line 3", "line 4"];
print_out.forEach(printFunction);

function printFunction(value) {
    console.log(value);
}



//map() Method: Creates a new array by performing a function on each original array element.
const firstArray = [20, 4, 15, 3];
const secondArray = firstArray.map(multipleFunction);

function multipleFunction(value) {
    return value * 2;
}
console.log(secondArray);



//filer array Method: Creates a new array with array elements that passes a test.
//Using the 2 arrays above:
const thirdArray = firstArray.filter(compareFunction);

function compareFunction(value) {
    return value > 10;
}
console.log("The third array is: " + thirdArray);


//reduce Method: Runs a function on each array element to preduce a single value.
const totalNumbers = [34, 5, 443, 2, 12];
let sum = totalNumbers.reduce(totalFunction);

function totalFunction(total, value) {
    return total + value
}
console.log(sum);

//reduce Method: Can accept an initial value:
let sum100 = totalNumbers.reduce(totalFunction, 100);
console.log(sum100);
//Note: Use reduceRight() to work from right-to-left in the array.

//Array every() Method: check if all array values pass a test
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
    return value > 18;
}
console.log(allOver18); //Return false, because the condition all values > 18 is false.

//Array some(): check if some array values pass a test.
let someOver18 = numbers.some(myFunction);
console.log(someOver18); //Return true , because this array has 2 values > 18

//Array indexOf(): searches an array for an element value and returns its position.
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1; //Return -1 if index NOT found, can use fruits.indexOf("Apple",2): with 2 is the start position to search.
console.log("Apple is in position:  " + position + "of this array");

//Array lastIndexOf():  is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.



//Array find(): returns the value of the first array element that passes a test function. - find() is NOT supported in Internet Explorer.
const findNumbers = [4, 17, 6, 9, 87];
let first = findNumbers.find(findfunction);

function findfunction(value) {
    return value > 12;
}
console.log(first);


//Array findIndex(): is the same as find(), but It returns the index of the first array element that passes a test function instead of value - It is alo NOT supported in Internet Explorer

//Array.from() : Returns an array object from any with a length property or any iterable object. - It is ES6 feature, supported in all browsers but NOT in Internet Explorer
let newArray = Array.from("ABC23DCC");
console.log(newArray);


//Array.keys(): returns an Array Iterator object with the keys of an array.
const keyArray = newArray.keys();
for (let x of keyArray) {
    console.log((x) + "\n");
}


//Array entries(): Create an array Iterator, and then iterate over the key/value pairs:
const myEntries = [1, 4, 54, 33, 2, 0];
const f = myEntries.entries();
for (let x of f) {
    console.log(x);
}


//Array includes(): check if an element is present in an array or not
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits1.includes("Mango")); // is true