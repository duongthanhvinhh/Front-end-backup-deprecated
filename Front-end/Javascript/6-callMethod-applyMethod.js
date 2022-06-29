// const person = {
//     firstName: "Vinh1",
//     lastName: "Duong1",
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// const vinh = {
//     firstName: "Vinh",
//     lastName: "Duong"
// }

// console.log(person.fullName());

// console.log(person.fullName.call(vinh));
// console.log(person.fullName.apply(vinh));
const person9 = {
    firstName: "First",
    lastName: "Last",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const vinh9 = {
    firstName: "Duong",
    lastName: "Vinh",
}
let bindMethod = person9.fullName.bind(vinh9);
console.log(bindMethod());







// What the difference between call,apply and bind Methods
// 1) Call:

// var person1 = {firstName: ‘Jon’, lastName: ‘Kuperman’};
// var person2 = {firstName: ‘Kelly’, lastName: ‘King’};

// function say(greeting) {
// console.log(greeting + ‘ ‘ + this.firstName + ‘ ‘ + this.lastName);
// }

// say.call(person1, ‘Hello’); // Hello Jon Kuperman
// say.call(person2, ‘Hello’); // Hello Kelly King

// 2) Apply:

// var person1 = {firstName: ‘Jon’, lastName: ‘Kuperman’};
// var person2 = {firstName: ‘Kelly’, lastName: ‘King’};

// function say(greeting) {
// console.log(greeting + ‘ ‘ + this.firstName + ‘ ‘ + this.lastName);
// }

// say.apply(person1, [‘Hello’]); // Hello Jon Kuperman
// say.apply(person2, [‘Hello’]); // Hello Kelly King

// 3) Bind:

// var person1 = {firstName: ‘Jon’, lastName: ‘Kuperman’};
// var person2 = {firstName: ‘Kelly’, lastName: ‘King’};

// function say() {
// console.log(‘Hello ‘ + this.firstName + ‘ ‘ + this.lastName);
// }

// var sayHelloJon = say.bind(person1);
// var sayHelloKelly = say.bind(person2);

// sayHelloJon(); // Hello Jon Kuperman
// sayHelloKelly(); // Hello Kelly King