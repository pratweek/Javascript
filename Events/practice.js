let btn1 = document.querySelector("#btn1");
let body = document.querySelector("body");
let currMode = "light";
btn1.addEventListener("click", () => {
    if (currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
       body.classList.add("light")
       body.classList.remove("dark");
    }

    console.log(currMode);
})

//Method 2 


// let btn1 = document.querySelector("#btn1");
// let currMode = "light";
// btn1.addEventListener("click", () => {
//     if(currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     } else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
// })
