class person {

    constructor() {
        console.log("Entered parent constructor")
        this.species = "Homo Sapiens"
    }

    eat(){
        console.log("eat");
    }

    work() {
        console.log("do nothing");   // Refer point 2 for inheritance
    }
    
}

class engineer extends person {
    constructor(branch) {
        console.log("Entered child constructor");
        super(); //to invoke parent class constructor otherwise error
        this.branch = branch; 
        console.log("exit child constructor");
    }

    work() {
        super.eat(); // This invoke eat before work function 
        console.log("solve problem");
    }
}

let eng1 = new engineer("Chemical Engineer");
console.log(eng1);



   // New Code 

class animal  {
    constructor(name) {
       this.name = name;
    }
}

class reptiles extends animal {
        constructor(name) {
            super(name);  //if name is removed then name will be undefined
        }

        hunt() {
            console.log("insects");
        }
    }

    let rep1 = new reptiles("snake");
    console.log(rep1.name);

                                                                                                                                           