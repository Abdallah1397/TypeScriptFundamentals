// Type Annotations with Functions
// noImplicityAny became false to handle implicity error.
// noImplicityReturn became true to give error if no implicity return
// localVariableNotUsed  became true to give error if any loacal variable not used
// noUnUsedParameters became true to give error if any Parameter function not used

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

// Required, Optional and Default Parameter Value
// Optional Parameter must be come after required Parameters
const showData = (name: string, city: string = "as", age?) =>
  `My Name is ${name} and I'm ${age} years old and I'm from ${city}`;

console.log(showData("abdallah", undefined, 25));

// Rest Parameter
// summation function take rest parameter array of numbers and returns a number.
const summation = (...restParameter: number[]): number => {
  let result=0;
  restParameter.forEach((item) => (result += item));
  return result
};

console.log(summation(5,6,8,9.2,10));
