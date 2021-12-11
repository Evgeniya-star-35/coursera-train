// console.log(2 && 1 && null && 0 && undefined);
// Чему равна длина arr.length массива arr?
// let arr = [];
// arr[1] = 1;
// arr[3] = 33;
// console.log(arr.length);//4

// Существует ли такое значение X, что после присваивания a = X вызов alert(a == X) выдаст false?

// let a = "другое";
// alert(a == "другое"); // false
// Чему будет равен this?
// let user = {
//   sayHi: function () {
//     alert(this);
//   },
// };

// (user.sayBye = user.sayHi)();

// console.log(null == undefined);//true

// Что выведет этот код?

// function F() {
//   return F;
// }

// alert(new F() instanceof F);
// alert(new F() instanceof Function);

// Что выведет этот код?

// alert(+"Infinity");//infinity

// Что выведет этот код?

// let f = function g() {
//   return 23;
// };

// alert(typeof g());

//Какие из этих вариантов задают массив из элементов «a», «b»?
// let a = new Array("a", "b");
// console.log(a);//true
// let a = { "a", "b" };//false
// console.log(a)
// let a = ("a", "b");
// console.log(a);//false
// let a = ["a", "b"];
// console.log(a);//true
// let a = "a,b".split(",");
// console.log(a);//true
// Что выведет этот код?
// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     alert(i); //Числа от 0 до 9.
//   }, 100);
// }

// Что выведет sayHi при вызове через setTimeout?
// let name = "Вася";
// function sayHi() {
//   alert(name);
// }

// setTimeout(function () {
//   let name = "Петя";
//   sayHi();
// }, 1000);

// Чему равно это выражение?

// [].push(1, 2).unshift(3).join();
// console.log([].push(1, 2).unshift(3).join());//error

// Чему равна переменная name?
// let name = "пупкин".replace("п", "д");
// console.log(name);

// Что выведет этот код?

// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     alert(i);//10 10
//   }, 100);
// }

// Какие варианты правильно объявляют функцию f, возвращающую сумму двух аргументов ?
// let f = function (a, b) {
//   return a + b;
// };
// console.log(f); //true

// let f = new Function("a,b", "return a+b");
// console.log(f);//anonimus
// let f = new Function("a", "b", "return a+b");
// console.log(f); //anonimus
// let f = (a, b) => a + b;
// console.log(f);//false
// let f = (a, b) => {
//   a + b;
// };
// console.log(f);//false

// Что выведет этот код?
// if (function f() {}) {
//   alert(typeof f);
// }
