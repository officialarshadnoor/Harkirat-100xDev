// const num1 = 1;
// const num2 = 3;
// function sum(a: number, b:number){
//     return a +b;
// }

// let a : string = "Arshad";
// a = "Hello";
// console.log(a);

// // Array type
// const b: number[] = [];

// b.push(2);

// const a: Date[] = [new Date()]

// a.push(new Date);

// any type

// let a:any;

// a = 3
// a = "Abd"


// const person = {name: "Arshad", age: 19};

// const person: {name: string; age: number; isProgrammer?: boolean} = {
//     name: "Arshad",
//     age:19,
//     isProgrammer:false,
// }

// person.isProgrammer = true;



// type Person = {name:string, age:number, isProgrammer?: boolean, friends: string[],address: {
// street: string,
// }};

// const person : Person = {
//     name: "Arshad",
//     age:19,
//     friends:[],
//     address: {
//         street: "Bihar, India"
//     }
// }

// const person2 : Person = {
//     name: "Aroha",
//     age: 20,
//     friends: [],
//     address: {
//         street: "Columbia"
//     }
// }


// interface 

interface Person {
    name: string,
    age: number,
    isProgrammer: boolean,
    friends: string[]
}

const obj1 : Person = {
name: "Arshad",
age: 19,
isProgrammer: true, 
friends: ["Abc","DEF"]
}


function sum(a:number, b:number): number{
    return a+b;
}

const c = sum(1, 2);


function printPerson(person: {name:string}){
    console.log(person.name);
}
const person = {name:"Arshad",age:19};

printPerson(person);

// void type
function printName(name:string):void
{
console.log(name);
}

const a = printName("hello");


function printNameAndAge(name:string, age:number){
    console.log(name, age);
}

printNameAndAge("Rakesh",26);


// type Options = {debugMode: boolean};

// function printNameAnd(name:string, Options: {}){
//     console.log(name, debugMode);
// }

// printNameAnd("vbfdjkvb",true);

function sum(...nums:number[]){
let sum=0;

for (let i=0;i<nums.length;i++){
sum+=nums[i];
}
return sum;
}