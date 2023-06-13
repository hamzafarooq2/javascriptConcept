// Even before code start executing the memory is allocated to all
// variables and functions.
// the simple function has all its body, but arrow function will be undefined because it is just store as variable.

var x = 7;
function getName() {
  console.log("Hamza");
}
var getName2 = function () {
  console.log("ali");
};
var getName3 = () => {
  console.log("raza");
};
getName();
console.log(x);
console.log(getName);
console.log(getName2);
console.log(getName3);
