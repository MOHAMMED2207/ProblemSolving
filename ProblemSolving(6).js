// 🚀 هل نكمل التمرين السادس؟
// أقترح:

// "إزالة العناصر المكررة من مصفوفة."
// مثلاً: [1, 2, 2, 3, 4, 4, 5] → [1, 2, 3, 4, 5]

const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [];
for (let i = 0; i < arr.length; i++) {
  if (!unique.includes(arr[i])) {
    unique.push(arr[i]);
  }
}
console.log(unique); // [1, 2, 3, 4, 5]

// شرح الخطوة خطوة:
// 1. new Set(arr)
// Set في جافاسكريبت هو نوع خاص من البيانات.
// فكرته إنه بيخزن القيم بدون تكرار.
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
// 2. [...new Set(arr)]
// ... ده اسمه Spread Operator.
// فكرته إنه بيفك كل القيم اللي جوه الـ Set ويرجعهم في شكل مصفوفة جديدة.
