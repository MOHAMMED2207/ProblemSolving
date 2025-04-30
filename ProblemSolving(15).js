// ✅ التمرين 15:
// 🧹 تنظيف مصفوفة من العناصر الفارغة فقط ("")
// مثال: [1, "", 2, "", 3] → [1, 2, 3]

// ✅ 1. Plain JavaScript
const arr = ["hi", "", "js", "", "code"];
const cleaned = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== "") {
    cleaned.push(arr[i]);
  }
}
console.log(cleaned); // ["hi", "js", "code"]

// 💎 2. Clean Code
const arr2 = [1, "", 2, "", 3]; // مصفوفة الأعداد
arr2.filter((item) => item !== "" && item !== null && item !== undefined); // استخدام دالة filter لتنظيف المصفوفة
console.log(arr2); // [1, 2, 3]
