// 🚀 التمرين التاسع؟
// أقترح:

// "اعكس ترتيب الأرقام في مصفوفة."
// مثلاً: [1, 2, 3] → [3, 2, 1]

// ✅ 1. Plain JavaScript
const arr = [1, 2, 3];
const reversedArr = arr.reverse();
console.log(reversedArr); // [3, 2, 1]

// ✅ 2. Using ES6+ features
// 💎 2. Clean Code
const arr2 = [1, 2, 3];
const reversedArr2 = (arr) => [...arr].reverse(); // Spread operator to create a shallow copy
console.log(reversedArr2([1, 2, 3])); // [3, 2, 1]

// ✅ 3. Using a loop
const arr3 = [1, 2, 3];
const reversedArr3 = [];
for (let i = arr3.length - 1; i >= 0; i--) {
  reversedArr3.push(arr3[i]);
}
console.log(reversedArr3); // [3, 2, 1]

// ✅ 4. Using recursion
const arr4 = [1, 2, 3];
const reverseArray = (arr) => {
  if (arr.length === 0) return [];
  return [arr[arr.length - 1], ...reverseArray(arr.slice(0, -1))]; // Recursive call with the last element and the rest of the array

  //   reverseArray([1,2,3])
  //   => [3, ...reverseArray([1,2])]
  //      => [3, 2, ...reverseArray([1])]
  //         => [3, 2, 1, ...reverseArray([])]
  //            => [3, 2, 1]
};
console.log(reverseArray(arr4)); // [3, 2, 1]

// ✅ 5. Using Array.prototype.reduce()
const arr5 = [1, 2, 3, 4, 5];
const reversedArr5 = arr5.reduce((acc, curr) => [curr, ...acc], []); // Reduce to build a new array in reverse order

// initial: []
// iteration 1: curr=1 => [1]
// iteration 2: curr=2 => [2, 1]
// iteration 3: curr=3 => [3, 2, 1]

console.log(reversedArr5); // [3, 2, 1]

// ✅ 6. Using Array.prototype.map()
const arr6 = [1, 2, 3];
// Using map to create a new array in reverse order
// Note: This is not the most efficient way to reverse an array, but it's a fun exercise.
const reversedArr6 = arr6.map((_, i, a) => a[a.length - i - 1]); // Map to create a new array in reverse order

// على سبيل المثال:
// a[a.length - 0 - 1] = a[3 - 0 - 1] = a[2] = 3.
// عندما i = 0 → a[a.length - 0 - 1] = a[2] = 3.
// عندما i = 1 → a[a.length - 1 - 1] = a[1] = 2.
// عندما i = 2 → a[a.length - 2 - 1] = a[0] = 1.

console.log(reversedArr6); // [3, 2, 1]
