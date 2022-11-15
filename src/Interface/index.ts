// Interface
// Describe the structure of an object which means it describes how the object should look like.
// The TypeScript compiler does not convert interface to JavaScript.
// Why should we use interface in TypeScript ?  
/*
 * We should use Interface in TypeScript for validating the structure of an object in the case where we are creating an object,
   passing object as parameters.
 * The interface is only available in TypeScript code when it compiles JavaScript code its existence disappears it doesn't 
   make our final Source code heavie 
 */ 
interface Emp {
  userName: string;
  id: number;
}

const emp1: Emp = {
  userName: "Abdallah",
  id: 1,
};
console.log(emp1.userName);

