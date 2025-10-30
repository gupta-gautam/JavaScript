console.log("hello");
window.alert("hi");
console.dir(window.document);
console.log(document.body);
console.dir(document.body);
//console.log(document.body.childNodes[3].innerText = "abcd");

// Id
let heading = document.getElementById("heading"); // h1
console.log(heading);
console.dir(heading);

// Class
let headings = document.getElementsByClassName("heads");
console.dir(headings);
console.log(headings);

// Tag
let para = document.getElementsByTagName("p");
console.log(para);
console.dir(para);

// Query Selector
let elements = document.querySelector(".heads"); // 1st element
console.dir(elements);
console.log(elements);

let AllElements = document.querySelectorAll("p"); // All element
console.dir(AllElements);
console.log(AllElements);

//Tag Name
console.log(elements.tagName);

// Inner Text
let div = document.querySelector("div");
console.dir(div);
console.log(div.innerText);

// Inner HTML
console.log(div.innerHTML);

let h = document.querySelector("h3");
console.log(h);

console.log(h.innerText); // khali chiz aayi isme

console.log(h.textContent); // visibility hidden thi isliye text content daalne se aaya



