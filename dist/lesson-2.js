"use strict";
let num;
let str;
let bool;
let empty;
let notParam;
num = 10;
str = "Some string";
bool = true;
empty = null;
notParam = undefined;
let arrString;
let arrNumber;
let arrAny;
let arrObj;
const obj = {};
const objTest = { name: "Alex" };
const obj1 = {};
obj1.name = "Alex";
let some;
some = 10;
some = "Some string";
some = {};
let num1;
num1 = some;
let some1;
some1 = 10;
let num2;
let fixed;
fixed = ["Text", 10];
let union;
union = "Text";
union = 10;
function combine(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
let literal;
literal = "first";
function greeting(action) {
    if (action === "hello") {
        console.log("Hello user!");
    }
    else {
        console.log("Bye user!");
    }
}
function returnResult(num) {
    return num;
}
console.log(returnResult(5));
function print() {
    console.log("Print some text");
}
function generateError(message, status) {
    throw { message, status };
}
generateError("An error", 500);
function calc(param1, param2, callback) {
    console.log("Result:", callback(param1, param2));
}
calc(1, 1, (num10, num20) => num10 + num20);
calc(10, 5, (num10, num20) => num10 - num20);
const data = {
    id: 1,
    price: 10.99,
    permission: ["read", "write"],
    details: {
        title: "New product",
        description: "This is awesome product!",
    },
};
let age;
age = 50;
let myname;
myname = "Dima";
let toggle;
toggle = true;
let empty1;
empty1 = null;
let notInitialize;
notInitialize = undefined;
let callback1 = (a) => {
    return 100 + a;
};
callback1 = (a) => {
    return 100 + a;
};
let anything;
anything = -20;
anything = "text";
let user;
user = ["Dima", 25];
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
const page = {
    load: Load.READY,
};
if (page.load === Load.LOADING) {
    console.log("Loading...");
}
if (page.load === Load.READY) {
    console.log("is load");
}
let unionLet;
let word;
function showMessage(message) {
    console.log(message);
}
function calculate(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//# sourceMappingURL=lesson-2.js.map