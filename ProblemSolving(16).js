// ✅ التمرين 16:
// 🔄 دمج مصفوفتين بدون تكرار عناصر
// [1, 2, 3] + [2, 3, 4] → [1, 2, 3, 4]

// // ✅ 1. Plain JavaScript
const arr1 = [1, 2, 3]; // مصفوفة الأعداد الأولى
const arr2 = [2, 3, 4]; // مصفوفة الأعداد الثانية
const merged = []; // مصفوفة جديدة لتخزين الأعداد المدموجة
for (let i = 0; i < arr1.length; i++) {
  !merged.includes(arr1[i]) && merged.push(arr1[i]); // إذا لم يكن الرقم موجودًا في المصفوفة الجديدة، أضفه
}
for (let i = 0; i < arr2.length; i++) {
  !merged.includes(arr2[i]) && merged.push(arr2[i]); // إذا لم يكن الرقم موجودًا في المصفوفة الجديدة، أضفه
}
console.log(merged);

// // 💎 2. Clean Code
const arrfn1 = [1, 2, 2, 3]; // مصفوفة الأعداد الأولى
const arrfn2 = [2, 3, 4, 4]; // مصفوفة الأعداد الثانية
const mergedfn = [...new Set([...arrfn1, ...arrfn2])]; // دمج المصفوفتين
console.log(mergedfn); // [1, 2, 3, 4]
