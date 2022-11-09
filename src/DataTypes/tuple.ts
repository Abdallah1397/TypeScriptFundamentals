// Tuple
// Is a typed array with a pre-defined length and types for each index.

let ourTuple:[string,number,boolean];
ourTuple=["Abdallah",25,true];

ourTuple.unshift(1);
console.log(ourTuple);
// Output ['Abdallah', 25, true, 1]

// Note: Here we haven't type safety in our tuple for indexes 3+ so we will use read only

const readOnlyTuple: readonly [string,number,boolean]=['Abdallah', 25, true];
// readOnlyTuple.push("aa"); // push does not exist because we use readonly
console.log(readOnlyTuple);