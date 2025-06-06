// Function Composition
// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

// var compose = function (functions) {
//   return function (x) {
//     let result = x;
//     for (let i = functions.length - 1; i >= 0; i--) {
//       result = functions[i](result);
//     }
//     return result;
//   };
// };
// // Example usage:
// let functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];

// let x = 4;
// let output = compose(functions)(x); 
// console.log(output); // Output: 65







// Another example: 
var compose = function(functions) {
    
    return function(x) {
        for(let i = functions.length - 1; i >= 0; i--) {
            const fnc = functions[i];
            x = fnc(x);
        }
        return x;
    }
};
// Example usage:
let functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x]; 
let x = 4;
let output = compose(functions)(x); 
console.log(output); // Output: 65

