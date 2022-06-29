/*
The break statement "jumps out" of a loop.
The continue statement "jumps over" one iteration in the loop.
*/
let text = "";
const a = [1, 4, 2323, 6, 5, 7]
for (let i = 0; a[i];) {
    if (i === 3) { break; }
    text += "The number is " + a[i] + "\n";
    i++;
}
console.log(text); //Print the first 3 elements of array.

let text1 = "";
for (let i = 0; a[i]; i++) {
    if (a[i] % 2 != 0) { continue; }
    text1 += "The number is " + a[i] + "\n";
}
console.log(text1); //Print all even number in array


const student = ["studen1", "student2", "student3"];
let aStudent = "";
listLable: {
    console.log(student[0]);
    console.log(student[1]);
    break listLable;
    console.log(student[2]);

}