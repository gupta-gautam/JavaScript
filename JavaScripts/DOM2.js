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
console.log(div.style.backgroundColor = "magenta"); // dynamically color change ho gya
console.log(div.style.fontSize="26px");
console.log(div.style.width="200px")
console.log(div.style.innerText = "HELLO!"); // ye daalne se site pr change ni hoga
console.log(div.style.textAlign="center");
div.innerText ="Hello!"; // but ye daalne se site pr change ho jayga

// Insert Elements
