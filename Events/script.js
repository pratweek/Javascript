let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
}
// exteral js has priority over inline js
// last code will be executed if same event is defined twice


let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div")
}


//access event object - carries info about event occured
let btn3 = document.querySelector("#btn3");
btn3.onclick= (evt) => {
    console.log(evt);   
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}



