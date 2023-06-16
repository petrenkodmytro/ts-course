// Advanced Type & Generics
console.log("Lesson 5");

// Intersection Types
// Можна об'єднувати типи та інтерфейси за допомогою extends, але є коротший запис. Замість type мщже бути interface
type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDatr: Date;
};
type ElevatedEmployee = Admin & Employee;
const someEmployee: ElevatedEmployee = {
  name: "Dima",
  privileges: ["drop-all"],
  startDatr: new Date(),
};
// Якщо ми хочемо саме зберегти в інтерфейс, то скорочення не працює, потрібно так.
interface IElevatedEmployee extends Employee, Admin {}

// Type Guards - Це як обробляти конфлікти типів.
type CompleType = string | number;
// TS не знає, як йому працювати з цими типами, рядок це або число.
function comdine(a: CompleType, b: CompleType) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// Type Casting
// const input = document.getElementById('inputEmail')
// Тут одразу дві помилки, inputEmail може не бути і спочатку TS читає його HTMLElement, а там немає value.
// input.value = 'test@mail.com'
const input = document.getElementById("inputEmail") as HTMLInputElement;
input.value = "test@mail.com";
// або
const inputNext = document.getElementById("inputEmail");
if (inputNext) {
  (inputNext as HTMLInputElement).value = "test@test.ts";
}

// Index Properties
// Бувають ситуації, коли ми знаємо якісь поля явно, але деякі поля нам невідомі, але ми точно знаємо, якого типу вони повинні бути. Для цього можна скористатися такою конструкцією [x: string]: string вказуємо, якого типу саме поле і який тип буде зберігатися.
interface IPerson {
  name: string;
  [x: string]: string;
}
const userPerson: IPerson = {
  name: "Dima",
  gender: "Man",
  country: "Ukraine",
};

// Optional Chaining '?'
// Це спрощення для перевірок, а чи є якесь поле в об'єкті. Можна для цього використовувати Lodash, а можна механізмом в TS.
interface IPersonNew {
  name: string;
  additinInfo?: {
    someInfo: string;
  };
}
const userNew: IPersonNew = {
  name: "Dima",
};
console.log("userNew?.additinInfo?.someInfo", userNew?.additinInfo?.someInfo);

// Nullish Coalescing
const userInput = "";
const store = userInput ?? "DEFAULT";
console.log("store:", store);

// Перевантаження операторів (function overloads)
// B суворо типізованих мовах є перевантаження операторів, це коли залежно від типу (або кількості) вхідних параметрів повертається різний результат і різні типи.
type AdminType = {
  type: "admin";
  name: string;
};
type UserType = {
  type: "user";
  name: string;
};

function checkUser(name: string, type: "admin"): AdminType;
function checkUser(name: string, type: "user"): UserType;
function checkUser(name: string, type: "admin" | "user") {
  if (type === "admin") {
    return {
      name,
      type: "admin",
    };
  } else {
    return {
      name,
      type: "user",
    };
  }
}

const userUnknown = checkUser("Nikita", "user");
const admin = checkUser("Tonya", "admin");
