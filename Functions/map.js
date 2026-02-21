//Map Method is similar to forEach as both type of array methods
//create new array with results of some operations.
//The value callback returns are used to form new array 
//arr.map(callbackFnx(value,index,array)) Similar to forEach array method


//To print all values
let nums = [53,75,24];
nums.map((val) => {
    console.log(val);
})

//Store values returned to new array
let naturalNum = [1,2,3,4,5];
let newArr = naturalNum.map((nat) => {
    return nat*2;

})
console.log(newArr);

