//Ways to insert element in HTML code
let newBtn = document.createElement("button"); //create element
newBtn.innerText = "Click here!";
console.log(newBtn);


//Add Element node.prop
let div = document.getElementById("List");
// div.append(newBtn); //add to end
//div.prepend(newBtn) //add to top
// div.after(newBtn); //outside
// div.before(newBtn);

//To add near paragraph 
let p = document.querySelector("p");
p.before(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> Hi, I am new!</i>";
document.querySelector("body").prepend(newHeading);

//Delete a Node
let el = document.getElementById("box");
el.remove();

