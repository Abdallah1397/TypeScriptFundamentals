// Type assertion allows you to set the type of a value and tell the compiler not to infer it.
// TypeScript doesn't perform any checking to ensure that type assertions are validated or not.

let code: any = 123; 
let employeeCode = <number> code; 
console.log(typeof(employeeCode)); //Output: number


// Type Assertions with Objects
// let employee = { };
// employee.name = "John"; //Compiler Error: Property 'name' does not exist on type '{}'
// employee.code = 123; //Compiler Error: Property 'code' does not exist on type '{}'

interface Employee { 
    name: string; 
    code: number; 
} 

let employee = <Employee> { }; 
employee.name = "John"; // OK
employee.code = 123; // OK