class Vinh {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static alarm() {
        return "This is an alarm.";
    }
}

let employee = new Vinh("Vinh", 24);
console.log(Vinh.alarm()); //It would be OK.
console.log(employee.age);
// console.log(employee.alarm()); //This will raise an error, YOU can NOT call a static method on an Object.




//If you want to use the type_alarm object inside the static method, you can send it as a parameter as below:
class manage {
    constructor(alarm, priority) {
        this.alarm = alarm;
        this.priority = priority;
    }
    static alarm(x) {
        return "This is an" + x.alarm + "alarm.";
    }
}

let type_alarm = new manage("DEBUG", "high");
console.log(manage.alarm(type_alarm));
console.log(type_alarm.priority);