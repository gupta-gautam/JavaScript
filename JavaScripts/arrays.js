// Arrays

let marks = [97,85,89,90];
console.log(marks);
console.log(marks.length); //property

let cities = ["delhi","bangalore","mumbai","patna","jhansi","mount abu"];

// for loop
for(let i =0;i<cities.length;i++){
console.log(cities[i]);
}

// for of
for(let city of cities){
console.log(city.toUpperCase());
}


// Lets's Practice
let m = [85,97,44,37,76,60];
let sum =0;
for(let val of m){
sum+=val;
}
let avg = sum / m.length;
console.log(`avg marks of class = ${avg}`);


let items = [250,645,300,900,50];
let i = 0;
for(let val of items){
let offer = val /10;
items[i] = items[i] - offer;
console.log(`value after offer = ${items[i]}`);
i++;
}

// PUSH add to end
let food = ["potatao","litchi","mango","papaya"];
food.push("burger","chips","pizza")

//POP removes from end
console.log(food.pop());

// ToString converts arrays to strings
console.log(food.toString());

//Concat join multiple arrays
let male =["Rahul","Gautam","Mohan"];
let female =["Priya","Riya"];

let gender = male.concat(female);
console.log(gender);

//Unshift add to start
female.unshift("ruhi");
console.log(female);

// Shift delete
male.shift();
console.log(male);

//Slice returns a piece of array
// in this original array not change
console.log(male.slice(1,2));

//Splice change original array(add,remove,replace)
 let arr = [1,2,3,4,5,6,7,8];
 //arr.splice(2,2,101,102);

 // Add Element
 arr.splice(2,0,101);

 // Delete Element
 arr.splice(4,1);

 //Replace Element
 arr.splice(3,1,101);

// Lets's Practice
let companies = ["bloomberg","microsoft","uber","google","IBM","netfix"];
console.log(companies.shift());
console.log(companies);

console.log(companies.splice(1,1,"Ola"));
console.log(companies);

console.log(companies.push("Amazon"));
console.log(companies);