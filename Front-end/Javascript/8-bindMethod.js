const person = {
    firstName: "First",
    lastName: "Last",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const vinh = {
    firstName: "Duong",
    lastName: "Vinh",
}
let fullName = person.fullName.bind(vinh);
console.log("My full name is: " + fullName());
console.log("logs");