//Create a new Map:Map can contain duplicate values, but cannot contain duplicate key. If duplicate key, when you print out, the value will be the last value of these duplicate keys.
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

//You can add element with the set() method:
fruits.set("pineaple", 450);
console.log(fruits);

//The set() method can also be used to change existing Map values:
fruits.set("bananas", 100);
console.log(fruits);

//The get() method gets the value of the key in a Map:
console.log(fruits.get("oranges"));

//The size property returns the number of elements in a Map:
console.log(fruits.size);

//The delete() method removes a Map element:
fruits.delete("bananas");
console.log(fruits);

//The has() method returns true if a key exists in a Map:
console.log(fruits.has("bananas"));

//The forEach() method calls a function for each key/value pair in a Map:
let text = "";
fruits.forEach(function(value, key) {
    text += key + ' = ' + value + "\n";
})
console.log(text);

//The entries() method returns an iterator object with the [key,values] in a Map:
//List all entries:
let entriesList = "";
for (const x of fruits.entries()) {
    text += x + "\n";
}
console.log("Output here:");
console.log(text);