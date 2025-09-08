// Loops

// For Loops
for(let i=1;i<=10;i++){
console.log(i);
}

console.log("loop has ended");

// Calculate sum of 1 to 5
let sum = 0;
for(let i = 1; i <= 5; i++ ){
sum += i;
}
console.log(sum);


// While Loops
let i =1;
while(i<=5){
console.log("i=",i);
i++;
}

// Do-While Loops

let j = 1;
do{
console.log("j=",j);
j++;
} while(j<=8);


// For-of Loops
// is for Strings and Arrays Not for Objects
let str = "Gautam";

let size =0;
for( let z of str){ // iterator -> characters
console.log(z);
size++;
}

console.log("string size =",size);


// For-in Loops
// is for Objects and Arrays
let student = {
name : "rahul",
age : 18,
cgpa : 9,
isPass : true,
};

// will return key
for(let key in student){
console.log("key=",key ,"value=",student[key]);
}

//Print all even from 0 to 100
for(let num=0;num<=100;num++){
if(num % 2 === 0){
console.log(num);
}else{
}
}

// Game question
let gameNum = 25;

let userNum = prompt("Guess the game number :");

while(userNum != gameNum){ // game

userNum =  prompt("You entered wrong number. Guess again :");

}

console.log("congratulations you entered the right number");


// Strings
let string = "gautam";
console.log(string[0]);


// Template Literals
let specialString = 'This is a template';
console.log(specialString);

let obj = {
item : "pen",
price : 10,
};

let output = 'the cost of ${obj.item} is ${obj.price} rupees';
console.log(output);
console.log("the cost of",obj.item , "is", obj.price,"rupees");