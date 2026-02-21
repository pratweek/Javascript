class parent {
    hello() {
        console.log("hello");
    }
}

class child extends parent {}
let obj = new child();
console.log(obj);
console.log(obj.hello()); //hello

class person {

    constructor() {
        this.species = "Homo Sapiens"
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("do nothing");   // Refer point 2 for inheritance
    }
    
}

class engineer extends person {
    work() {
        console.log("solve problem");
    }
}

class doctor extends person {
    work() {
        console.log("treat patients");
    }
}

let your_name = new engineer;
console.log(your_name);
console.log(your_name.work());
console.log(your_name.sleep());