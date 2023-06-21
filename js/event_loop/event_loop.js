// First when we run our code there will be a global
//  execution context in call stack (when it comes to call back the call back will be registered in web api when it is click or setTimeOut is completed it will go callback queue) , when call stack will
//  be empty the event loop send call back function  to
//  call stack from call back queue and remove from call
//  queue, and when its run it will also removed from call stack

// ------------------------------Example : 1
// console.log("Start");

// setTimeout(function cb() {
//   console.log("Callback")
// },5000);

// console.log("End")

// -------------------------------Example : 2

// console.log("Start")

// document.getElementById("btn").addEventListener("click", function cb() {
//   console.log("Callback")
// })

// console.log("End")

// -------------------------------Example : 3
//  => From microtask and call back queue the microtask queue
// has priority,
// => Mutation observer and all the callback function which
// come through promises will go in microtask queue.

console.log("Start");

setTimeout(function cb() {
  console.log("CB SetTimeout");
}, 5000);

fetch("https://jsonplaceholder.typicode.com/users").then(function cbF() {
  console.log("CB users");
});

console.log("End");
