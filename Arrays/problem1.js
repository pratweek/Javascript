//Average of marks of students

let marks = [45,67,87,68];
let sum =0;
for(let val of marks){
    sum += val;
}
let avg = sum / marks.length
console.log(`avg marks of class = ${avg}`);

