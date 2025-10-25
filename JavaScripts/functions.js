function myFunction(){
console.log("Welcome to this world");
console.log("I am learning JS :)");
}
myFunction();

function yourFunction(msg,n){  // parameter -> input
console.log(msg,n);
}
yourFunction("JavaScript",100); // argument

//Function-> 2 numbers , sum

function sum(a,b){
// local variables -> scope
console.log(a+b);
}
sum(10,2);


// Difference
function diff(x,y){
s = x - y;
return s;
}
let val = diff(5,4);
console.log(val);

// Arrow Functions

function addition(a,b){
return a + b;
}
// Modern JS
const arrowSum = (a,b)=>{
console.log(a+b);
};


// Multiplication
function mul(i,j){
return i * j;
}

const arrowMul = (i,j) =>{
return i * j;
};

const printHello = () =>{
console.log("Hello");
}

// Let's Practice
function countVowels(str){
let count =0 ;
for(const char of str){
if( char === "a"|| char ==="e" || char ==="i"||char ==="o"|| char === "u"){
count++;
}
}
return count;
}

const countVow = (str) => {
let count =0 ;
for(const char of str){
if( char === "a"|| char ==="e" || char ==="i"||char ==="o"|| char === "u"){
count++;
}
}
return count;
}

// For Each in Arrays

let arr= [1,2,3,4,5];

//arr.forEach(function printVal(val){ // value at each index
//console.log(val);
//})

arr.forEach((val,idx,arr)=>{
console.log(val,idx,arr);
});

// Lets's Practice

let array = [1,2,3,4,5,];
array.forEach((val)=>{
console.log(val*val);
})

// MAP

let  nums = [43,54,67];
let newArray =nums.map((val)=>{
return val;
});
console.log(newArray);


// FIlTER
let num = [1,2,3,4,5,6,];

let even = arr.filter((val)=>{
return val % 2 ===0;
});

console.log(even);

//REDUCE

let array1 = [1,5,3];

const output = arr.reduce((prev,curr)=>{
return  prev > curr ? prev :curr;
});
console.log(output);

//Lets's Practice
let marks = [87,93,97,80,86];
let highest = marks.filter((val)=>{
return val > 90;
});
console.log(highest);


let n = prompt("enter a number");
let array2 = [];
for(let i=1;i<=n;i++){
array2[i-1] = i; //1[0] , 2[1] , 3[2] , 4[3]
}
console.log(array2);

let add = array2.reduce((previous,current)=>{
return previous + current;
});
console.log(add);

let multi = array2.reduce((previous,current)=>{
return previous * current;
});
console.log(multi);