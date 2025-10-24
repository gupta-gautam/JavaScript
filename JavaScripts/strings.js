// Strings

let string = "gautam";
console.log(string[0]);


// Template Literals
let specialString = `This is a template ${1 + 2 + 3}`;
console.log(specialString);
console.log(typeof specialString);

let obj = {
item : "pen",
price : 10,
};

// ek hi baar mai likhne ke liye bactick template literal use krra
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// isme alg se baar baar obj.item and obj.price likhna pdh rha tha usme
// ek hi backtick lgakr andr sb likh diya
console.log("the cost of",obj.item , "is", obj.price,"rupees");

// Escape Characters
let str = "Gautam\nGupta";
console.log(str);
console.log(str.length);

console.log("Gautam\tGupta");

// String Methods

let strs = "Gautam Gupta";
let newStr = strs.toUpperCase();
console.log(strs);
console.log(newStr);

// this method will not change real value but return new string new value

let s = "     Gautam is in IT    ";
console.log(s.trim());
// TRIM removes starting and ending whitespaces

//SLICE returns part of string
// Last ending is not inclusive
let sc = "abcdef";
console.log(sc.slice(1,3));

//  Joins string in conacatenation
let str1 ="apna"
let str2 = "college";

// let res = str1 + str2;
let res = str1.concat(str2);
console.log(res);

// Return
let str3 = "hello";
console.log(str3.replace("h","y"));

// replaceAll for baar baar jo repeat ho rha h

//Character at index
let str4 = "Gautam";
console.log(str4.charAt(3));

// Let's Practice
let user = prompt("Enter your full name");
console.log(user);

// let newUser = "@" + user + user.length;
let newUser = `@${user}${user.length}`;
console.log(newUser);