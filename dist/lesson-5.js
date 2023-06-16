"use strict";
var _a;
console.log("Lesson 5");
const someEmployee = {
    name: "Dima",
    privileges: ["drop-all"],
    startDatr: new Date(),
};
function comdine(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const input = document.getElementById("inputEmail");
input.value = "test@mail.com";
const inputNext = document.getElementById("inputEmail");
if (inputNext) {
    inputNext.value = "test@test.ts";
}
const userPerson = {
    name: "Dima",
    gender: "Man",
    country: "Ukraine",
};
const userNew = {
    name: "Dima",
};
console.log("userNew?.additinInfo?.someInfo", (_a = userNew === null || userNew === void 0 ? void 0 : userNew.additinInfo) === null || _a === void 0 ? void 0 : _a.someInfo);
const userInput = "";
const store = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log("store:", store);
function checkUser(name, type) {
    if (type === "admin") {
        return {
            name,
            type: "admin",
        };
    }
    else {
        return {
            name,
            type: "user",
        };
    }
}
const userUnknown = checkUser("Nikita", "user");
const admin = checkUser("Tonya", "admin");
//# sourceMappingURL=lesson-5.js.map