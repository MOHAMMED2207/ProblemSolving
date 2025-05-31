// Recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// Example usage:
console.log(factorial(5)); // Output: 120

// Recursive Fibonacci
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// Example usage:
console.log(fibonacci(6)); // Output: 8

// Recursive Power Function
function power(base, exponent) {
  if (exponent === 0) return 1;
  // 2 * power(2, 2) = 2 * 4 = 8
  return base * power(base, exponent - 1);
}
// Example usage:
console.log(power(2, 3)); // Output: 8

// Recursive Sum of Array
function sumArray(arr) {
  if (arr.length === 0) return 0;
  // arr[0] + sumArray(arr.slice(1)) = 1 + sumArray([2, 3]) = 1 + (2 + sumArray([3])) = 1 + (2 + 3) = 6
  return arr[0] + sumArray(arr.slice(1));
}
// Example usage:
console.log(sumArray([1, 2, 3])); // Output: 6

// Recursive Reverse String
function reverseString(str) {
  if (str === "") return "";
  // str[str.length - 1] + reverseString(str.slice(0, -1)) = "c" + reverseString("ab") = "c" + ("b" + reverseString("a")) = "c" + ("b" + "a") = "cba"
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}
// Example usage:
console.log(reverseString("hello")); // Output: "olleh"

// Recursive Binary Search
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1; // Base case: target not found

  // left = 0, right = 4 = Math.floor((0 + 4) / 2) = 2
  const mid = Math.floor((left + right) / 2); // mid = 2
  // arr[mid] = arr[2] = 3
  if (arr[mid] === target) {
    return mid; // Target found
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right); // Search in the right half
  } else {
    return binarySearch(arr, target, left, mid - 1); // Search in the left half
  }
}
// Example usage:
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2

// Recursive GCD (Greatest Common Divisor)
function gcd(a, b) {
  if (b === 0) return a; // Base case: if b is 0, return a
  return gcd(b, a % b); // Recursive case: gcd of b and remainder of a divided by b
}
// Example usage:
console.log(gcd(48, 18)); // Output: 6

// NESTED RECURSION
// Nested recursion is a type of recursion where a function makes a recursive call to itself, and that call may also make further recursive calls.countNumbers([1, [2, [3, 4], 5], "hello", [true, 6]])
function countNumbers(arr) {
  let result = [];
  // [1, [2, [3, 4], 5]
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...countNumbers(item)); // Flatten nested arrays
    } else {
      result.push(item); // Collect numbers
    }
  }

  return result;
}
// Example usage:
console.log(countNumbers([1, [2, [3, 4], 5, [6, [7]]]])); // Output: 6

// Recursive Exponentiation by Squaring
function exponentiationBySquaring(base, exponent) {
  if (exponent === 0) return 1; // Base case: any number to the power of 0 is 1
  if (exponent < 0) return 1 / exponentiationBySquaring(base, -exponent); // Handle negative exponents
  if (exponent % 2 === 0) {
    const half = exponentiationBySquaring(base, exponent / 2);
    return half * half;
  } else {
    return base * exponentiationBySquaring(base, exponent - 1);
  }
  // if  (exponent % 2 === 0)
  // 1- step(1)___exponentiationBySquaring(2, 5) فردي حول
  // 2- step(2)___exponentiationBySquaring(2, 2)  زوجي كمل
  // 3- step(3)___exponentiationBySquaring(2, 1) فردي حول

  // else if (exponent % 2 === 0)
  // 2- step(1)___2 * exponentiationBySquaring(2, 4)
  // 4- step(4)___2 * exponentiationBySquaring(2, 0) → ✅ = 1

  // 🔁 العمليات بالترتيب الكامل:
  // exponentiationBySquaring(2, 10)

  // → يحتاج exponentiationBySquaring(2, 5)
  // → يحتاج exponentiationBySquaring(2, 4)
  // → يحتاج exponentiationBySquaring(2, 2)
  // → يحتاج exponentiationBySquaring(2, 1)
  // → يحتاج exponentiationBySquaring(2, 0) → ✅ = 1

  // ← 2^1 = 2 * 1 = 2
  // ← 2^2 = 2 * 2 = 4
  // ← 2^4 = 4 * 4 = 16
  // ← 2^5 = 5 * 5 = 32
  // ← 2^10 = 32 * 32 = 1024
}
// Example usage:
console.log(exponentiationBySquaring(2, 10)); // Output: 1024

// Recursive Merge Sort
function mergeSort(arr) {
//   if (arr.length <= 1) return arr; // Base case: array is already sorted

//   const mid = Math.floor(arr.length / 2); // Find the middle index
//   const left = mergeSort(arr.slice(0, mid)); // Sort the left half
//   const right = mergeSort(arr.slice(mid)); // Sort the right half

//   return merge(left, right); // Merge the sorted halves
    return arr.sort((a, b) => a - b); // Using built-in sort for simplicity
}

// function merge(left, right) {
//   const result = [];
//   let i = 0;
//   let j = 0;

//   // Merge the two sorted arrays
//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }

//   // Add any remaining elements from the left array
//   while (i < left.length) {
//     result.push(left[i]);
//     i++;
//   }

//   // Add any remaining elements from the right array
//   while (j < right.length) {
//     result.push(right[j]);
//     j++;
//   }

//   return result;
// }
// Example usage:
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10])); // Output: [3, 9, 10, 27, 38, 43, 82]
// [3, 9, 10, 27, 38, 43, 82]
