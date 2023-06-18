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
let arr = [];
const promise = new Promise((resolve) => {
    setInterval(() => {
        resolve("Promise Resolve Done after 1 s");
    }, 2000);
});
promise.then((data) => {
    console.log(data);
});
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
const merged = merge({ name: "Alisa" }, { age: 28 });
console.log(merged.name);
const merged1 = merge({ name: "Dima" }, { age: 30 });
function mergeNew(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedNew = mergeNew({ name: "Alisa" }, { age: 20 });
merged.name;
function extractValue(obj, key) {
    console.log(obj[key]);
    return obj[key];
}
extractValue({ name: "Dima" }, "name");
class StoreClass {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    getItem() {
        console.log("data", this.data);
        return this.data;
    }
}
const storeClass = new StoreClass();
storeClass.addItem("test-1");
storeClass.addItem("test-2");
storeClass.getItem();
function createNewPerson(name) {
    const myPerson = {};
    myPerson.name = name;
    myPerson.age = 35;
    return myPerson;
}
const arrReadonly = ["one", "two", "three"];
const pageAnnotation = {
    annotation: "cmall page",
    numberPage: 1,
};
console.log("Practic");
function getPromise() {
    return new Promise((resolve) => {
        resolve(["Text", 50]);
    });
}
getPromise().then((data) => {
    console.log(data);
});
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
function mergeObj(objA, objB) {
    return Object.assign(objA, objB);
}
class Component {
    constructor(props) {
        this.props = props;
    }
}
class PageHome extends Component {
    pageInfo() {
        console.log('PageHome title:', this.props.title);
    }
}
const pageHome = new PageHome({ title: "Title" });
pageHome.pageInfo();
