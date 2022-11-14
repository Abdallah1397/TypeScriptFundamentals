// Enums => allow developers to define a set of named constant.
// Used for logical grouping collection of constants
// Organize Code
// By Default Enums are number-based, first element is 0
// Type of Enums
// 1- Numeric Enums
// 2- String-Based
// 3- Heterogeneous

enum Level {
  Up = 30,
  Down = 15,
}

// showLevel Function
const showLevel = (level: string) => {
  switch (level) {
    case "Up":
      return `The Up level grade is ${Level.Up}`;
    case "Down":
      return `The Down level grade is ${Level.Down}`;
    default:
      console.log("Please select another flower");
      return `The Down level grade is ${Level.Down}`;
  }
};

console.log(showLevel("Udp"));

