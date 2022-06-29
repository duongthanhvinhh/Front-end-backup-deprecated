var person = {
    firstName: "Duong",
    lastName: "Vinh",
    homeTown: "NO",
};

Object.defineProperties(person, "homeTown", {
    value: "quang Ngai",
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperties(person, "homeTown", {
    get: function() {
        return homeTown;
    },
    set: function(value) {
        homeTown = value.toUpperCase();
    },
});

person.homeTown = "quang Ngai";
console.log(person.homeTown);

//------------->Investigate later...................