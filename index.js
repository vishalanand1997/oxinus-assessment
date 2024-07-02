console.log(a); // undefined
console.log(b); // Error
console.log(c);
console.log(HostFunc()); // Hositing
var a = 5;
let b = 4;
const c = 7;

function HostFunc() {
  return "Hositing";
}

// function outer() {
//   const a = 5;
//   function inner() {
//     return a + 4;
//   }
//   return inner;
// }
// console.log(outer());






