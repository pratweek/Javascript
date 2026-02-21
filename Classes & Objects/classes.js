class toyotaCar {
    constructor(edition, mileage) {
        console.log("creating new object");
        this.edition = edition; //Custom contructor
        this.mileage = mileage;
    }
    start () {
      console.log("start");
    }

    stop () {
       console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let fortuner = new toyotaCar("2024", 10);     //Constructor is invoked
let lexus = new toyotaCar("2025", 12);        // Constructor is invoked
console.log(fortuner);
console.log(lexus);
console.log(typeof fortuner);
console.log(fortuner.start());
console.log(fortuner.stop());
lexus.setBrand("Lexus");
fortuner.setBrand("Fortuner");