// ✅ التمرين 17:
// 🔢 تحويل رقم إلى مصفوفة أرقامه
// مثلاً: 12345 → [1, 2, 3, 4, 5]

// ✅ 1. Plain JavaScript // for loop
const number = 12345; // الرقم المراد تحويله
const val1 = []; // مصفوفة جديدة لتخزين الأرقام
for (let i = 0; i < String(number).length; i++) {
  val1.push(Number(String(number)[i])); // تحويل الرقم إلى مصفوفة من الأرقام
}

// ✅ 1. Clean Code
const val = [...number.toString()].map(Number); // تحويل الرقم إلى مصفوفة من الأرقام
console.log(val); // [1, 2, 3, 4, 5]

// 💎 2. Array.from
const valfn = Array.from(String(number), Number); // تحويل الرقم إلى مصفوفة من الأرقام
console.log(valfn); // [1, 2, 3, 4, 5]

// 💎 3.  map
const valfn2 = String(number).split("").map(Number); // تحويل الرقم إلى مصفوفة من الأرقام
console.log(valfn2); // [1, 2, 3, 4, 5]

// 💎 4. for
const valfn3 = []; // مصفوفة جديدة لتخزين الأرقام
for (let i = 0; i < String(number).length; i++) {
  valfn3.push(Number(String(number)[i])); // تحويل الرقم إلى مصفوفة من الأرقام
}
console.log(valfn3); // [1, 2, 3, 4, 5]

// 💎 5. forEach
const valfn4 = []; // مصفوفة جديدة لتخزين الأرقام
String(number)
  .split("")
  .forEach((num) => {
    valfn4.push(Number(num)); // تحويل الرقم إلى مصفوفة من الأرقام
  });
console.log(valfn4); // [1, 2, 3, 4, 5]

// 💎 6. map
const valfn5 = String(number).split("").map(Number); // تحويل الرقم إلى مصفوفة من الأرقام
