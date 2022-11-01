// Type Annotations | Signature
// Indicate the date type of the variable

let theName:string="Abdallah";
let theAge:number=25;
let isMale:boolean=true;
//isMale="dd"; // here we will find error => Type 'string' is not assignable to type 'boolean'.ts
console.log(theName);



// if we need to use any data type we will use any
let theState:any="Hello World."
theState=50;  


// let we look at to this function
//const sum=(a,b)=>a+b;  // in this case we will face an error type implicity
// we need to make type annotations
const sum=(a:number,b:number)=>a+b;
console.log(sum(5,4));