"use strict";
const sayHello = true;
const welcomeMessage = (userName) => {
    if (sayHello) {
        return `Hello ${userName}`;
    }
    return `${userName} you aren't welcome here.`;
};
console.log(welcomeMessage("Abdallah"));
const showData = (name, city = "as", age) => `My Name is ${name} and I'm ${age} years old and I'm from ${city}`;
console.log(showData("abdallah", undefined, 25));
const summation = (...restParameter) => {
    let result = 0;
    restParameter.forEach((item) => (result += item));
    return result;
};
console.log(summation(5, 6, 8, 9.2, 10));
//# sourceMappingURL=withFunctions.js.map