// Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

function getSum(num, length) {
  let sum = [];
  if (num === length) return num;
  for (let i = Math.min(num, length); i <= Math.max(num, length); i++) {
    sum.push(i);
  }
  result = sum.reduce((acc, curr) => acc + curr, 0);
  return result;
}
console.log(getSum(0, -1)); // Output: -1
console.log(getSum(0, 1)); // Output: 1



// plain JavaScript solution for the same problem 
// This function takes two integers a and b, and returns the sum of all integers between them, inclusive.
// If a and b are equal, it returns either a or b.
// The function uses a loop to iterate from the smaller number to the larger number, adding each integer to a sum variable.

function getSum2(a, b) {
  if (a === b) return a;
  let sum = 0;
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  
  return sum;
}
console.log(getSum2(0, -1)); // Output: -1
console.log(getSum2(0, 1)); // Output: 1

