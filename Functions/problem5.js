let n = prompt("Enter a number :");
let arr = [];                   //Storing inputs from user in arr
for(let i =1; i<=n; i++){
    arr[i-1] = i 
};
console.log(arr)

//Sum of number in array

let sum = arr.reduce((pre,curr) => {

    return pre+curr;
});
console.log(sum);


//Product of numbers in array

let factorial = arr.reduce((pre, curr) => {
    return pre*curr;
});
console.log("factorial = ", factorial);


