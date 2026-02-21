let newBtn = document.createElement("button");
newBtn.innerText = "Click Here!";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newBtn);


let para = document.querySelector("p");
// para.getAttribute("class");
// para.setAttribute("class", "newClass");
//This method overwrites the property set so we use classList property
console.log(para.classList);
para.classList.add("newClass"); //To remove use classList.remove
console.log(para.classList);