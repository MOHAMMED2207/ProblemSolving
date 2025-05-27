// Counter
// Given an integer n, return a counter function.
// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Example 1:

// Input:
// n = 10
// ["call","call","call"]
// Output: [10,11,12]
// Explanation:
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
function createCounter(n) {
  let count = n; // Initialize the counter with the given integer n
  return function () {
    return count++; // Return the current count and then increment it
  };
}
// Example usage:
console.log(createCounter(-1)); // Output: 10

function add(a, b) {
  // Convert a and b to numbers and return their sum as a string
  const num = (Number(a) + Number(b)).toString()
  return num
}
console.log(add("123", "321")); // Output: "3"
