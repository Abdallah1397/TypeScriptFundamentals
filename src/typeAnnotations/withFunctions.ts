// Type Annotations with Functions
// noImplicityAny became false to handle implicity error.
// noImplicityReturn became true to give error if no implicity return
// localVariableNotUsed  became true to give error if any loacal variable not used
// noUnUsedParameters became true to give error if any paramter function not used

// declare and define sayHello variable
const sayHello = true;
// Welcome Message Function
// with input and output type annotations
const welcomeMessage = (userName: string): string => {
  if (sayHello) {
    return `Hello ${userName}`;
  }
  return `${userName} you aren't welcome here.`;
};

console.log(welcomeMessage("Abdallah"));

// Required, Optional and Default Paramter Value
// Optional Paramter must be come after required paramters
const showData = (name: string, city: string = "as", age?) =>
  `My Name is ${name} and I'm ${age} years old and I'm from ${city}`;

console.log(showData("abdallah",undefined, 25));
