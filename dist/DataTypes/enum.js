"use strict";
var Level;
(function (Level) {
    Level[Level["Up"] = 30] = "Up";
    Level[Level["Down"] = 15] = "Down";
})(Level || (Level = {}));
const showLevel = (level) => {
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
//# sourceMappingURL=enum.js.map