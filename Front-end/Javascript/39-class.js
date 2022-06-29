class person {
    constructor(year, name) {
        this.year = year;
        this.name = name;
    }
    age(x) {
        return x - this.year;
    }
}
let date = new Date();
let year = date.getFullYear();

let myself = new person(1999, "Vinh");

console.log("I am " + myself.age(year) + " years old.");
console.log("I am " + myself.name);