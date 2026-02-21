let head = document.querySelector("h2");
console.log(head.innerText);
head.innerText = head.innerText + " Query Selector";


let divs = document.querySelectorAll(".box");
console.dir(divs);
let idx =1;
for(div of divs){
    div.innerText= `new unique value ${idx}`;
    idx++;
}

// divs[0].innerText = "new unique value";
// divs[1].innerText = "new uique value";
// divs[2].innerText = "new uique value";