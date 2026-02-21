const student = {
    fullName : "Abhinav Singh",
    marks: 96.7,
    printMarks : function () {
        console.log("marks = ", this.marks);  //student.marks
    },
};

const employee = {
    calcTax() {                   //Both here and above correct way for function
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
}
karanArjun.__proto__ = employee;
console.log(karanArjun.calcTax());

const karanArjun2 = {
    salary : 25000,
    calcTax() {
        console.log("tax rate is 20% for karanArjun2");
    }
}

karanArjun2.__proto__ = employee ;
console.log(karanArjun2.calcTax());