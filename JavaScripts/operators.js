// This code prints hello world
console.log("hello world!");


//Arithmetic Operators
let a = 5; // number
let b = "5"; //string -> number

console.log("a = ",a , "& b =" , b);
console.log("a + b = ", a + b );
console.log("a - b = ", a - b );
console.log("a * b = ", a * b );
console.log("a / b = ", a / b );

// Modulus % gives Remainder for eg :- 5 % 2 = 1
console.log("a % b = ", a % b );

// Exponentiation  for eg:- a ** b ,  2 ** 3 = 8
console.log("a ** b = ", a ** b ); // 5^2 = 25

//Unary Operators
 console.log("a++ = ",a++); //5
 console.log("a = " ,a); //6
// a++ pehle a++ dalkr a ki value 5 print hogi then console.log(a) dalkr 6 print hoga baad mai agli line se bdhega


 console.log(++a);
 // ++a  pehle 5 ki value change hokr 6 bnegi then 6 ki value print hogi same in decrement

  console.log(--a);
   console.log("--aa =",a--);
    console.log(a);

 // Assignment Operators
// a+=4; // a = a + 4;
// console.log("a = ",a); //9

 //Comparison Operators
 console.log("a!==b", a!==b); //true

 // Logical Operators
 let c = 6;
 let d = 5;

 let cond1 = c > d ; //true
 let cond2 = c===6; //true
 //Logical AND
 console.log("cond1 && cond2 =", cond1 && cond2);

 // we can write directly console.log( a > b && a===b);

//Logical OR
 console.log(c < d || c===6);

// Logical NOT
console.log("!( a < b ) =", !(a < b)); // False but gives True



// Conditional Statements

let age = 25;

if(age >= 18){
console.log("vote");
}
else{
console.log("not vote");
}

let mode = "light";
let color;

if(mode === "dark"){
color = "black";
}else{
color = "white";
}

console.log(color);

// Odd or Even
let num = 11;
if(num % 2 === 0){
console.log("even");
}else{
console.log("odd");
}

// Syntax -> Rules

let background = "blue";
let colour;

if(background === "dark"){
colour = "black";
} else if (background === "blue"){
colour = "blue";
} else if ( background === "pink"){
colour = "pink";
} else {
colour = "white"
}

console.log(colour);

//Ternary Operators
// a ? b : c

let year = 16;

let result = year >= 18 ? "adult" : "not adult"; // simpler , compact if-else
console.log(result);

// or we can write
// age >= 18 ? console.log("adult") : console.log("non adult");

