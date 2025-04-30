// 🎯 التمرين الرابع
// أوجد أكبر رقم في مصفوفة.
// مثلاً: [3, 7, 2, 9, 5] → الناتج: 9

// ✅ 1. Plain JavaScript
const arr = [3, 7, 2, 9, 5];  
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max); // 9

// 💎 2. Clean Code
const getMax = (numbers) =>
  numbers.reduce((max, current) => (current > max ? current : max));
console.log(getMax([3, 7, 2, 9, 5])); // 9

// Another solution
const getMax2 = (numbers) => Math.max(...numbers);
console.log(getMax([3, 7, 2, 9, 5])); // 9
