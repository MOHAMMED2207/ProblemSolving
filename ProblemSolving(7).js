// 🚀 التمرين السابع؟
// أقترح:

// "احسب مجموع الأرقام الفردية فقط في مصفوفة."
// مثال: [1, 2, 3, 4, 5] → الناتج: 1 + 3 + 5 = 9

// ✅ 1. Plain JavaScript
const arr = [1, 2, 3, 4, 5];
const sumOfOdds = arr.reduce((acc, num) => {
  if (num % 2 !== 0) {
    acc += num;
  }
  return acc;
}, 0); // بنبدأ من صفر لأننا بنجمع
console.log(sumOfOdds); // 9

// ✅ 1. Plain JavaScript
const arr2 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 !== 0) {
    sum += arr2[i];
  }
}
console.log(sum); // 9


// 💎 2. Clean Code
const isOdd = (n) => n % 2 !== 0; // true or false
const sumOfOddss = (arr) =>
  arr.filter(isOdd).reduce((acc, num) => acc + num, 0);

console.log(sumOfOddss([1, 2, 3, 4, 5])); // 9
