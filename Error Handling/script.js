let a =5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
try {
    console.log("a+b = ", a+c); //error because c is not defined
} catch (err) {
    console.log("Error occurred: ", err);
};
console.log("a*b = ", a*b);
console.log("b/a = ", b/a);