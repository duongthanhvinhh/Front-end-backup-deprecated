//Use this to preserv "this". Need to investigate more.
const vinh = {
    firstName: "Duong",
    lastName: "Vinh",
    display: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}
let display = vinh.display.bind(vinh);
setTimeout(display, 3000);



// const vinh1 = {
//     firstName: "Duong",
//     lastName: "Vinh",
//     show: function() {
//         console.log(this.firstName + " " + this.lastName);
//     }
// }
// setTimeout(vinh1.show, 3000);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
let removed = fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);
console.log(removed);