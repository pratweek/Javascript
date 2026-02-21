let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);

//getAttribute(atrr) - to get any attribute
let name = div.getAttribute("name");
console.log(name);


//Change Attribute - setAttribute(attr,value)
let para = document.querySelector("p");
console.log(para.setAttribute("class", "newClass")); 
console.log(para);

//node.style - to access style 
console.log(div.style);
div.style.backgroundColor = "red"; //Change style 
div.style.fontSize = "25px";
// div.style.visibility = "hidden";