// Events Handling

let btn1 = document.querySelector("#btn1");

//btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
//     let a = 25;
//     a++;
//     console.log(a); //26

// Event Listener => Add
btn1.addEventListener("click",(evt) => {
     console.log("button1 was clicked handler1");
      console.log(evt);
          console.log(evt.type);
          console.log(evt.target);
         console.log(evt.clientX,evt.clientY);
})

btn1.addEventListener("click",() => {
     console.log("button1 was clicked handler2");
})

const handler3 = () => {
     console.log("button1 was clicked handler3");
}
btn1.addEventListener("click",handler3);

btn1.addEventListener("click",() => {
     console.log("button1 was clicked handler4");
})

// Event Listener => Remove
btn1.removeEventListener("click",handler3);


let box = document.querySelector("div");

box.onmouseover = (evt) => {
    console.log("you are inside div");
    console.log(evt);
         console.log(evt.type);
         console.log(evt.target);
         console.log(evt.clientX,evt.clientY);
}
let boxes = document.querySelector("div");
let currMods = "light";
boxes.addEventListener("onmouseover",() => {
       if(currMods === "blue"){
       currMods = "dark";
       document.querySelector("body").style.backgroundColor="black";
       }else{
       currMods = "blue";
        document.querySelector("body").style.backgroundColor="blue";
       }
       console.log(currMods);
});

// Let's Practice
let modeBtn = document.querySelector("#mode");
let currMode = "light"; // dark

modeBtn.addEventListener("click",() => {
       if(currMode === "light"){
       currMode = "dark";
       document.querySelector("body").style.backgroundColor="black";
       }else{
       currMode = "light";
        document.querySelector("body").style.backgroundColor="white";
       }
       console.log(currMode);
})
