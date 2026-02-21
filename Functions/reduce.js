//Filter is also a type of array method
//perform some operations and reduces the arrray to a single value. 
//it returns that single value


let arr = [1,2,3,4];
const output = arr.reduce((prev,curr) => {
    return prev + curr;
});
console.log(output);

let nums = [23,46,28,59,68];
const largest = nums.reduce((first,second) => {
    return first > second ? first : second;
});
console.log(largest)


