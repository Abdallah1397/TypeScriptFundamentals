"use strict";
let info = "Name";
info = 50;
const displayStatus = (state) => {
    console.log(`Status ${state.done} with error ${state.error} with status code ${state.errorStatusCode}`);
};
displayStatus({ done: true, error: "NetworkError", errorStatusCode: 0 });
//# sourceMappingURL=alias.js.map