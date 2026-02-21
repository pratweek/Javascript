//genrally used for objects
let student ={
    name: "Ravi kumar",
    age:20,
    cgpa:8.0,
    isPass: true

};
for(let i in student){
    console.log(i);
}
for( let key in student){
    console.log("key=",key,"value=",student[key]);
}
