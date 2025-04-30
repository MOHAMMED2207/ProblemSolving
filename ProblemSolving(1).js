// لغز 1: العدد المفقود من [1, 2, 3, 5]
// ✅ الحل:

const arr1 = [1, 2, 3, 5, 9, 10];
const n1 = 10;
const expectedSum1 = (n1 * (n1 + 1)) / 2; // 55
const actualSum1 = arr1.reduce((acc, num) => acc + num, 0); // 30
const missing1 = expectedSum1 - actualSum1;
const missingNumbers1 = [];

for (let i = 1; i <= n1; i++) {
  if (!arr1.includes(i)) {
    missingNumbers1.push(i);
  }
}
console.log(`مجموع الأرقام الناقصة: ${missing1}`); // 25
console.log(`الأرقام الناقصة: ${missingNumbers1}`); // [4,6,7,8]

// 🧠 الشرح: نعرف أن مجموع أول N أعداد = n(n+1)/2
// نطرح مجموع الأرقام الموجودة من المجموع المتوقع → الرقم الناقص.

const arr2 = [3, 4, 6];
const n2 = 6;
let missing2 = 0;
const missingNumbers2 = [];

for (let i = 1; i <= n2; i++) {
  if (!arr2.includes(i)) {
    missing2 += i;
    missingNumbers2.push(i);
  }
}
console.log(`مجموع الأرقام الناقصة: ${missing2}`); // 8
console.log(`الأرقام الناقصة: ${missingNumbers2}`); // [1,2,5]

// test code ========================================================
const arr3 = [10, 11, 13, 15];
const n3 = 15;
const math3 = (n3 * (n3 + 1)) / 2; // 75
const actualSum3 = arr3.reduce((acc, num) => acc + num, 0); // 49
const fainalcalc3 = math3 - actualSum3;
const missingNumbers3 = [];

for (let i = 1; i <= n3; i++) {
  if (!arr3.includes(i)) {
    missingNumbers3.push(i);
  }
}
console.log(`مجموع الأرقام الناقصة: ${fainalcalc3}`); // 71
console.log(`الأرقام الناقصة: ${missingNumbers3}`); // [1,2,3,4,5,6,7,8,9,12,14]
