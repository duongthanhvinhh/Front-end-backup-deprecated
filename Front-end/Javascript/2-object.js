const object = "front_end"; //object with one value

const object1 = { type: "SA", model: "AS" }; //Object contains many values

console.log(object1.model);
console.log(object1["type"]);



//"this" in Javascript.
const person = {
    name: "Vinh",
    ages: 24,
    hometown: "Quang Ngai",
    fullInformation: function() {
        return "Name: " + this.name + " " + "Ages: " + this.ages + " Hometown:" + " " + this.hometown;
    }
};
console.log(person.fullInformation());