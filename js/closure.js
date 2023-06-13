//Uses of Closures:
//Module design CanvasPattern
//Currying
//Functions like once 
//memoize maintaing state in async world
//setTimeouts
//Iterators
//and many more
//----------------------------

// function x() {
//   var a = 7;
//   function y() {       // return before function is also same
//     console.log(a);
//   }
//   return y;
// }
// when we get function in z , we lost Execution context of x(),
//we don't have any x(), but we still get the value of a in z,
//by closure(Function along with its lexical scope bundled together forms closure)
// var z = x();
// console.log(z);

// z();
//------------------
// function x() {
//   var a = 7;
//   function y() {
//     // return before function is also same
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }
// when we get function in z , we lost Execution context of x(),
//we don't have any x(), but we still get the value of a in z,
//by closure(Function along with its lexical scope bundled together forms closure)
// var z = x();
// console.log(z);

z();
//--------------
function z() {
  var b = 900;

  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();
