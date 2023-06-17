// asynchronous

// console.log(" I ");
// console.log(" eat ");

// setTimeout(() => {                          //asynchronous function
//   console.log(" icecream ");
// }, 4000);

// console.log(" with a ");
// console.log(" spoon ");

// callbacks

// function one(call_two) {
//   console.log(" step one ");
//   call_two();
// }

// function two() {
//   console.log(" step two");
// }

// one(two);
//-----------------

// let order = (call_ingredients) => {
//   console.log("order is placed, please call production");
//   call_ingredients();
// };

// let production = () => {
//   console.log("order recieved , starting production");
// };

// order(production);

//-------------------Ice Cream Project----------------

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "penauts"],
// };

// let order = (fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[fruit_name]} was selected`);

//     call_production();
//   }, 2000);
// };
// -----------------------------Callback Hell

// let production = () => {
//   setTimeout(() => {
//     console.log("Order is taken, Production is started");
//     setTimeout(() => {
//       console.log("The fruit has been chopped");

//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);
//         setTimeout(() => {
//           console.log("The machine has been started.");
//           setTimeout(() => {
//             console.log(`Icecream was placed on ${stocks.holder[0]}`);
//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} was added as topping`);
//               setTimeout(() => {
//                 console.log("Serve the ice cream");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// order(1, production);
// ------------------------------------------Promise

// let is_shop_open = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if(is_shop_open) {
//       setTimeout(() => {
//         resolve(work());

//       }, time);
//     } else {
//       reject(console.log("Our shop is closed"));
//     }
//   });
// };

// order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))

// .then(() => {
//   return order(0000, ()=> console.log("Production has started"));
// })

// .then(() => {
//   return order(2000, ()=> console.log("The fruit was chopped"));
// })

// .then(() => {
//   return order(1000, ()=> {
//     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
//   });
// })

// .then(() => {
//   return order(1000, ()=>console.log("Start the machine"))
// })

// .then (() => {
//   return order(2000, () => {
//     console.log(`Ice cream placed on ${stocks.holder[0]}`)
//   })
// })

// .then (() => {
//   return order (3000, ()=> {
//     console.log(`${stocks.toppings[0]} was selected`)
//   })
// })

// .then (() => {
//   return order(1000, ()=>console.log("Ice cream was serveed."))
// })

// .catch(() => {
//   console.log("Customer left")
// })

// .finally(() => {
//   console.log("day eneded, shop is closed")
// });

// --------------------------------async/await

// let is_shop_open = true;

// let topping_choice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Which topping do you like ? "));
//     }, 3000);
//   });
// };

// async function kitchen() {
//   console.log("A");
//   console.log("B");
//   console.log("C");

//   await topping_choice();

//   console.log("D");
//   console.log("E");
// }

// kitchen();

// console.log("washing dishes");
// console.log("cleaning th table");
// There can be hundred task

//-----------------Finally---------------

// let is_shop_open = true;

// function time(ms) {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(resolve, ms);
//     } else {
//       reject(console.log("shop is closed"));
//     }
//   });
// }

// async function kitchen() {
//   try {
//     await time(2000);
//     console.log(`${stocks.Fruits[0]}`);

//     await time(0);
//     console.log("Start the production");

//     await time(2000);
//     console.log("cut the fruit");

//     await time(2000);
//     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);

//     await time(1000);
//     console.log("start the machine");

//     await time(2000);
//     console.log(`ice cream placed on ${stocks.holder[0]}`);

//     await time(3000);
//     console.log(`${stocks.toppings[0]} was selected`);

//     await time(2000);
//     console.log("serve the ice cream");
//   } catch (error) {
//     console.log("customer left, error")
//   } finally {
//     console.log("day eneded, shop is closed");
//   }
// }

// kitchen();
