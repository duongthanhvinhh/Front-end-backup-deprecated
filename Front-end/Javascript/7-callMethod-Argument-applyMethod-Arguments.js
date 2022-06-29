const person = {
    fullName: function(middleName, extraName) {
        return this.firstName + " " + this.lastName + " " + middleName + " " + extraName;
    }
};

const vinh = {
    firstName: "Vinh",
    lastName: "Duong",
};

console.log(person.fullName.call(vinh, "Thanh", "Cris"));

console.log(person.fullName.apply(vinh, ["Thanh", "Cris"]));

console.info("The difference between call method and apply method is: The call() method takes arguments separately. The apply() method takes arguments as an array.");