// Event listners helpful in executing multiple event for same element 
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    console.log("button 1 was clicked");
});
btn1.addEventListener("click", () => {
    console.log("handler 2");
});


 const handler3 = () => {
    console.log("handler 3");
};
btn1.addEventListener("click", handler3);



btn1.addEventListener("click", () => {
    console.log("handler 4");
});

btn1.addEventListener("click", (evt) => {
    console.log("handler 5");
    console.log(evt);
    console.log(evt.type);
});

//remove event listner

btn1.removeEventListener("click", handler3);
