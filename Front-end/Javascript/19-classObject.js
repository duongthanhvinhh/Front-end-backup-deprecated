// class person {
//     constructor(name, age, hometown) {
//         this.name = name;
//         this.age = age;
//         this.hometown = hometown;
//     }
// }

// const Vinh = new person("Duong Thanh Vinh", 24, "Quang Ngai city");
// console.log("He is " + Vinh.name + ". " + "He's 24 years old" + ". " + "He comes from " + Vinh.hometown);



// class MobilePhone {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     age() {
//         let date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// let Nokia8000 = new MobilePhone("Nokia8000", 1995);
// console.log(Nokia8000.age());

class MobilePhone {

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        return x - this.year;
    }
}
let date = new Date();
let x = date.getFullYear();

let Nokia8000 = new MobilePhone("Nokia8000", 1995);
console.log(Nokia8000.age(x));

console.log("x value: " + y);