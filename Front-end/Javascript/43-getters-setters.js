//Create a getter for a property called fullName:
const person = {
    firstName: "Duong",
    lastName: "Vinh",
    hometown: "NO",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set home(value) {
        this.hometown = value.toUpperCase();
    },
};
console.log(person.fullName);

person.home = "quang ngai";
console.log(person.hometown);