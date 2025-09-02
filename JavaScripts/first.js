// JavaScript is Dynamically Typed Language

console.log("Gautam Gupta");
console.log("Learning JavaScript");

//Variables
fullName = "Tony Stark";
FULLNAME = "Apple";
price=99.99;
radius = 14;
x = null; // no value of null
y = undefined;


//Null and undefined have little bit difference
//Undefined ka meaning PTA HI NHI ISKE ANDR KYA H for eg:-
let a;
console.log(a);


//Null ka meaning PTA TOH H ISKE ANDR KYA H PAR ISKE ANDR KHALI VALUE H
//Null is a type of Object

//Boolean type value
isFollow = false;

//If we have to print my variables value direct
//Do not use "fullName" this
//Use direct fullName
console.log(isFollow);
console.log(FULLNAME);

//This will not work reserved value
//console = "apna";
//console.log(console);

Console ="apna";
console.log(Console);


//let,const,var

//We will use let , const , var not to re-declared things
let name = "Gautam";
let age = 25;
console.log(name);

const PI =3.14;
const e = 2.7;
console.log(PI);

//const a;
//console.log(a);
//will show error;

{
  let age = 20;
 // let a =10; only one let of same variable in one block {}
  console.log(age);
}

{
 let age = 10;
 console.log(age);
}

//Data Types

let int =10;
//write typeof int it will give number

//BigInt it will show n in last for eg:- 123n
let m = BigInt(123);

//Symbol
let z =Symbol("Hello!");

//Objects is a collection of values
//key : value for eg:-

const student = {
fullname : "Gautam",
age : 18,
cgpa : 9,
isPass : true,
};

//To assign new value in objects
student["age"] = student["age"] + 1;

student["name"] = "rahul";
console.log(student["name"]);

//To access key there are two types obj.key or obj["key"]
console.log(student["age"]);
console.log(student.cgpa);

const product = {
name : "Parker Standard",
rating : 4,
price : 270,
offer : 5,
};

console.log(product);
console.log(typeof product["rating"]);