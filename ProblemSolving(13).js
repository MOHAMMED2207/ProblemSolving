// ✅ التمرين 13:
// 🧪 التحقق إذا كل العناصر أرقام (Numbers)

const checkAllNumbers = (arr) => {
  // استخدام دالة every للتحقق من كل العناصر
  // دالة every تتحقق من كل العناصر في المصفوفة
  return arr.every((item) => typeof item === "number"); // إذا كان كل العناصر أرقام، ترجع true
  // إذا كان هناك عنصر واحد ليس رقم، ترجع false
};

console.log(checkAllNumbers([1, 2, 3, 4])); // true
console.log(checkAllNumbers([1, 2, "3", 4])); // false

const checkAllNumbers2 = (arr) => {
  let togle = true; // متغير للتحكم في حالة التبديل
  for (let i = 0; i < arr.length; i++) {
    typeof arr[i] !== "number" && (togle = false);
  }
  return togle; // نرجع حالة التبديل
};

console.log(checkAllNumbers2([1, 2, 3, 4])); // true
console.log(checkAllNumbers2([1, 2, "3", 4])); // false
