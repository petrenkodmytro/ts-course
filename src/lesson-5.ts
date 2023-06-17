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

//Generics - узагальнений тип
let arr: Array<string | number> = [];
// Оскільки Promise може повернути все, що завгодно, без дженерика ми ніколи не будемо знати, що він повертає.
const promise: Promise<string> = new Promise((resolve) => {
  setInterval(() => {
    resolve("Done");
  }, 2000);
});
promise.then((data) => {
  console.log(data);
});

// Generic function/method
// T and U - довільна назва параметрів
function merge<T, U>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}
const merged = merge({ name: "Alisa" }, { age: 28 });
console.log(merged.name);
// Ми також можемо передавати типи під час виклику функції.
type Name = {
  name: string;
};
type Age = {
  age: number;
};
const merged1 = merge<Name, Age>({ name: "Dima" }, { age: 30 });

// Extends
// У функцію merge ми можемо передавати не тільки об'єкти в merge, і це не добре, хотілося б, щоб була помилка, коли ми передамо не об'єкт. Для цього ми можемо розширювати тим, використовуючи команду extends.
function mergeNew<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedNew = mergeNew({ name: "Alisa" }, { age: 20 });
merged.name;

// keyof
// У нас на практиці напевно виникне потреба повернути значення з об'єкта, але, навіть якщо ви напишите дженерики, ви отримаєте помилку. Оскільки TS не може гарантувати, що цей ключ є в об'єкті. Для цього є спеціальний оператор keyof. Він дозволяє зробити уточнення, що якийсь тип є ключем в об'єкті.
function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  // За допомогою U extends keyof T ми зробили уточнення, що тип U - це як ключ у типі T і тепер все працює.
  console.log(obj[key]);
  return obj[key];
}
extractValue({ name: "Dima" }, "name");

//Generic Classes
// Ми можемо призначити дженерики на клас, це буває зручно, якщо ми хочемо ніби позначити тип, який пронизуватиме увесь клас.
class StoreClass<T> {
  private data: T[] = [];
  addItem(item: T): void {
    this.data.push(item);
  }
  getItem(): T[] {
    console.log("data", this.data);
    return this.data;
  }
}
// І якщо передамо туди не той тип, буде помилка.
const storeClass = new StoreClass<string>();
storeClass.addItem("test-1");
storeClass.addItem("test-2");
storeClass.getItem();
