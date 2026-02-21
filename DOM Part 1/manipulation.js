//DOM Manipulation 

//Selecting with id 
let head1 = document.getElementById("heading1");
console.dir(head1);

//Selecting with class 
let head2 = document.getElementsByClassName("heading");
console.log(head2);
console.dir(head2);

//Selecting with tag 
let parahs = document.getElementsByTagName("p");
console.dir(parahs);

//Query Selectror
let firstel = document.querySelector("p");
console.dir(firstel);  //Return first element

let allel = document.querySelectorAll("p");
console.dir(allel);  //Return Nodelist

//To get name of tag- Tag Name
let butt = document.querySelector("button");
console.log(butt.tagName);

//Children Node
let child = document.querySelector("a").children;
console.dir(child);

//innerText- returns text content of element and all children
let fruits = document.querySelector("div");
console.dir(fruits);
console.dir(fruits.innerText);

//innerHTML - plain text or HTML content in elements
console.dir(fruits.innerHTML);

//Changes using innerText and innerHTML can be made
//fruits.innerHTML = "<div> inner div </div>";
//fruits.innerText ="abcd";
//head1.innerText = "New Heading"
head1.innerHTML = "<i>Italic Heading</i>";



//Text content - returns textual content even for hidden elements
let exampl = document.getElementById("hide");
console.dir(exampl.textContent);
