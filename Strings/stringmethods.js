//Built in functiojns to manipulate strings 
//str.toUpperCase()

let str= 'Visualstudio'
console.log(str.toUpperCase());

console.log(str);
// Does not change the string but instead creates a new string since strings in js are inmutable

str= str.toLowerCase();
console.log(str);

let newString= '   Hello javascript   is      fun  ';
console.log(newString.trim());
//Remove spaces from last and start of string leaves spaces in between unchanged

let str2 = 'abcdefghijklmn';
console.log(str2.slice(1,3))//leaves 3rd index because non inclusive

let str3 = 'opqrstuv';
let res=str2.concat(str3);
console.log(res); //Used to join two strings 
//Another way
let ans = str2+str3+"vwxyz"
console.log(ans);


let str4="hellolo";
console.log(str4.replace("lo","p")); //Used to replace letters in string
console.log(str4.replaceAll("lo","p"));

let str5 = "Javascript is fun to learn";
console.log(str.charAt(3)); //Used to find character of any index

let str6 = "Hello World";
str[0] = "S";
console.log(str6); //String is inmutable

//Instead we do 
str6 = str6.replace("H","W");
console.log(str6);



