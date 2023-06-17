"use strict"
// The javascript this keyword refers to object it belongs to.

// 1. Alone, this keyword refers to global object.

// console.log(this);

// 2. In a regular function, this refers to the global object

// function sum() {
//   var add = 2 + 2;
//   console.log("sum of two no is " + add);
//   console.log(this);
// }

// sum();

// 3. In a method, this refers to the owner object.

// const person = {
//   name: "hamza",
//   uni: "umt",
//   sum: function () {
//     var add = 3 + 2;
//     console.log("sum of two no is " + add);
//     console.log(this.uni);
//     console.log(this);
//   },
// };

// person.sum();

// 4. In a function , in strict mode, this is undefined
//uncomment line  1

function sum() {
  var add = 2 + 2;
  console.log("sum of two no is " + add);
  console.log(this);
}

sum();

