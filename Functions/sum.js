function sum(x,y){
    console.log(x+y);
}
sum(1,4);


function multiply(a,b){
    m = a*b;
    return m;
    //anything written after return will not be executed
}
let val = multiply(4,6);
console.log(val);

//Function parameters are local variables means block scope 