// -----lesson 1-----
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
// -----lesson 2-----
// Ім'я змінної і потім якого вона типу
var num;
var str;
var bool;
var empty;
var notParam;
// І призначаємо
num = 10;
str = "Some string";
bool = true;
empty = null;
notParam = undefined;
// Не потрібно вказувати тип даних, якщо ви передаєте його явно.
// const num = 10;
// const str = 'Some string';
// const bool = true;
// const empty = null;
// const notParam = undefined;
// Типи даних у функції
function foo(num, str, bool, empty) {
    // some logic
}
// Якщо ми хочемо вказати масив рядків або чисел.
var arrString;
var arrNumber;
// Якщо нам неважливо, які дані будуть в масиві
var arrAny;
// на початку вказується тип, а потім, що це масив
var arrObj;
// Якщо тип object
var obj = {};
// Необхідно описувати тип об'єкта.
var objTest = { name: "Alex" };
// Для того щоб вказати, що якесь поле не обов'язкове, є оператор '?'
var obj1 = {};
obj1.name = "Alex";
// Any - туди можна передати все, що завгодно
var some;
some = 10;
some = "Some string";
some = {};
var num1;
num1 = some;
// Unknown - За змістом це те саме, що й any, тільки коли ми будемо намагатися його зберегти в іншу змінну, ми отримаємо помилку.
var some1;
some1 = 10;
var num2;
// num2 = some1; // отримаємо помилку
// Tuple - Це кортеж, незмінний масив.
var fixed;
fixed = ["Text", 10]; // Якщо поміняємо місцями, то отримаємо помилку.
// Enum - Це навіть патерн, в typeScript вирішили додати його як тип даних.
// За правилами гарного тону змінна, яка в enum, починається з великої літери.
// Як це можна застосувати, припустимо, у нас є користувач, у якого є права.
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
var person = {
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log("Role: ", Role.ADMIN);
}
// Union Type - змінна або аргумент може містити кілька типів. Типи перелічуються через |
var union;
union = "Text";
union = 10;
// Давайте створимо функцію, яка об'єднує рядки, або додає числа.
// function combine(param1: number | string, param2: number | string) {
//   return param1 + param2;
// }
// Але за такого підходу ми отримаємо помилку. TypeScript просто не знає, рядок там чи число.
function combine(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
// Literal Type - Чимось схоже на Union Type, але тільки замість типів ми передаємо рядки.
var literal;
literal = "first";
// Це можна використовувати для перемикача, напишемо функцію, яка або вітається, або прощається з користувачем.
function greeting(action) {
    if (action === "hello") {
        console.log("Hello user!");
    }
    else {
        console.log("Bye user!");
    }
}
// І тепер, якщо ми передаватимемо туди літерал, якого немає в типі, отримаємо помилку.
// Типи для методів та функцій
// Return Type - вказувати тип, який повернеться з функції.
function returnResult(num) {
    return num;
}
// Ми просто після дужки вказуємо, який тип повинна повернути функція. Якщо передамо тип, який не вказаний, то отримаємо помилку.
// Void - Це коли функція нічого не повертає.
function print() {
    console.log("Print some text");
}
// Оскільки ми нічого не повернули, а просто викликали console.log, то помилки не буде. Якщо ми спробуємо щось повернути, то отримаємо помилку.
// Never - Це коли функція ніколи не закінчується та нічого не повертає. Наприклад, listen в express, оскільки підключення до сервера постійне, або якщо ми повертаємо throw, оскільки це помилка, можна сказати, що функція ніколи не закінчується.
function generateError(message, status) {
    throw { message: message, status: status };
}
generateError("An error", 500);
// Function Type - Ми можемо описати функцію як тип, це особливо актуально для callback або, коли ми просто прокидаємо функцію.
// let callback: (num: number) => void;
// callback = (num) => {
//   console.log(num);
// };
// Я не описав типи для аргументу і що повинна повернути функція, але тепер, якщо я передам замість числа рядок, то отримаю помилку.
// Припустимо, нам потрібно прокинути функцію в аргумент, але ми хочемо певну функцію, з якою вміємо працювати.
// Зробимо калькулятор і туди передаватимемо callback, який буде рахувати два аргументи.
function calc(param1, param2, callback) {
    console.log("Result:", callback(param1, param2));
}
calc(1, 1, function (num1, num2) { return num1 + num2; });
calc(10, 5, function (num1, num2) { return num1 - num2; });
