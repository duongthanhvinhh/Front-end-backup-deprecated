class Car {
    constructor(brand) {
        this.carName = brand;
    }
    present() {
        return 'I have a ' + this.carName;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.Model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.Model;
    }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());


let a = "5";
let b = "6";
let c = a + b;
console.log(c);