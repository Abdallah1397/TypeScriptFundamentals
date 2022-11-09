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
//# sourceMappingURL=withFunctions.js.map