//Use a setter to change the carname to "Volvo".
class Car {
    constructor(brand) {
        this._carname = brand;
    }
    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
}

let myCar = new Car("Ford");
myCar.carname = "Toyota";
console.log(myCar.carname);