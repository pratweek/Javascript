let DATA = "secret information";


class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data=" , DATA);
    }
}

class Admin extends User {
    constructor(name,email){
        super(name,email);
    }
    editData() {
        DATA = "some new value";
    }
}
let student1 = new User("Abhinav", "abhinav43@gmail.com");
let student2 = new User("Aman","aman634@gmail.com" );

let teacher1 = new User("Dean", "deancollage@gmail.com");

let admin1 = new Admin("admin","admincollage@gmail.com");

console.log(student1);
console.log(student1.viewData());

console.log(admin1);
console.log(DATA);
console.log(admin1.editData());
console.log(admin1.viewData());