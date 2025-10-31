console.log("hello");

// Attributes
let div = document.querySelector("div");
console.log(div);
console.log(div.getAttribute("id"));

let id= div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

// Set Attribute
let para = document.querySelector("p");
console.log(para.setAttribute("class","new class")); // dynamically change ho gya
console.log(para);

// Style
let divs = document.querySelector("div");
console.log(div);
console.log(div.style);
//console.log(div.style.backgroundColor = "magenta"); // dynamically color change ho gya
console.log(div.style.fontSize="26px");
//console.log(div.style.width="200px")
//console.log(div.style.innerText = "HELLO!"); // ye daalne se site pr change ni hoga
//console.log(div.style.textAlign="center");
//div.innerText ="Hello!"; // but ye daalne se site pr change ho jayga

// Insert Elements
let newBtn = document.querySelector("button");
newBtn.innerText ="click me!";
console.log(newBtn);

let p = document.querySelector("p");
p.after(newBtn) // add at the end of node

// append and prepend add inside the node

// before add outside the node before node

// after add the node outside after node

let  h1= document.createElement("h1");
h1.innerHTML = "<i>Hi, I am new!";

document.querySelector("body").prepend(h1);

// Remove
let paragraph = document.querySelector("p");
paragraph.remove();


// Lets's Practice
let but = document.createElement("button");
document.querySelector("body").prepend(but);
 but.style.backgroundColor="red";
 but.style.color="white";
 but.style.height="50px";
 but.innerText = "click me";

// Qs2
let u = document.querySelector("p");
console.log(u.getAttribute("class"));

//u.setAttribute("class","newClass");

// Class List mixes two classes properties
u.classList.add("newClass");