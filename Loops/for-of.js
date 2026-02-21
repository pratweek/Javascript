//for-of loop
let str = "JavaScript";
for(let i of str){
    console.log(i)
}
//iterator

//To find the length of String
let size=0;
for(let i of str){
    size++;
}
console.log("The size of string is", size) //10
//for-of loop generally used for strings and arrays