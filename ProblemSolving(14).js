// ✅ التمرين 14:
// 🧮 إيجاد المتوسط الحسابي لمصفوفة
// مثال: [2, 4, 6] → (2 + 4 + 6) / 3 = 4

// ✅ 1. Plain JavaScript
const arr1 = [2, 4, 6];
let sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
}
const avg1 = sum1 / arr1.length;
console.log(avg1); // 4

// 💎 2. Clean Code
// استخدام دالة forEach لجمع الأعداد
const arr2 = [4, 8, 12]; // مصفوفة الأعداد
let sum2 = 0; // متغير لجمع الأعداد
const calc = arr2.forEach((num) => {
  sum2 += num;
}, 0);

const avg2 = sum2 / arr2.length; // حساب المتوسط
console.log(`المتوسط الحسابي هو ${avg2}`); // المتوسط الحسابي هو 4

// 💎 3. Clean Code
// أو باستخدام دالة reduce
const arr = [2, 4, 6]; // مصفوفة الأعداد
const sum = arr.reduce((acc, num) => acc + num, 0); // استخدام دالة reduce لجمع الأعداد
const avg = sum / arr.length; // حساب المتوسط
console.log(`المتوسط الحسابي هو ${avg}`); // المتوسط الحسابي هو 4

// ==================================================================================================================
