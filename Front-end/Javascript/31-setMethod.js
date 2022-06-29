//Create a new Set: Set can not contain duplicate element
const letters = new Set(["a", "b", "c"]);


const names = new Set();
//add() method
names.add("vinh");
names.add("viet");
names.add("nghia");
console.log(names);

//forEach() method
let text = "";
let value;
names.forEach(function(value) {
    text += value + "\n";
})
console.log(text);

//values() method
let output = "";
console.log(names);
for (let x of names.values()) {
    output += x + "\n";
}
console.log(output);