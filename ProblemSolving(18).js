// ✅ التمرين 18:
// 🔠 عدّ الأحرف الكبيرة في نص
// "HeLLo" → 3

// ✅ 1. Plain JavaScript // filter + length
const strfn = "HeLLo"; // النص المراد حساب عدد الأحرف الكبيرة فيه
let count = 0; // عداد لحساب عدد الأحرف الكبيرة
for (let i = 0; i < strfn.length; i++) {
  if (strfn[i] === strfn[i].toUpperCase() && isNaN(strfn[i])) {
    count += 1;
  }
}
console.log(count); // 3

// 💎 1. Clean Code // filter + length
const countUppercase = (str) =>
  [...str].filter((ch) => ch >= "A" && ch <= "Z").length; // حساب عدد الأحرف الكبيرة;
console.log(countUppercase("HeLLo")); // 3

// ✅ 2. Clean Code // filter + length
const str = "HeLLo"; // النص المراد حساب عدد الأحرف الكبيرة فيه
const val = [...str].filter(
  (char) => char === char.toUpperCase() && isNaN(char)
).length; // حساب عدد الأحرف الكبيرة
console.log(val); // ['H', 'e', 'L', 'L', 'o']

// map + filter + length
const valfn = [...str]
  .map((char) => char === char.toUpperCase()) // تحويل الأحرف الكبيرة إلى true
  .filter((char) => char).length; // حساب عدد الأحرف الكبيرة
console.log(valfn); // 3
