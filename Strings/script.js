let str = "VisualStudio";
let str2 = 'JavaScript'


console.log(str.length)
console.log(str2.length)
console.log(str[2],str[8],str2[6],str2[0]);


//Template literals
let obj = {
    item: "Pen",
    price: "10",
};
console.log("The cost of",obj.item,"is",obj.price,"rupees");
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
//This is called string interpolation 


let specialString= `This is a template literal`;
console.log(typeof specialString);

let example= `This is a template literal ${1+3+4}`;
console.log(example);

//escape character
console.log("Hello \n World");
console.log("Hello \tWorld");