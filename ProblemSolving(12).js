// ✅ التمرين 12:
// 🔁 عدّ تكرار عنصر معين في مصفوفة
// مثال: [1,2,3,2,2,4] وندور على 2 → الناتج: 3
const arr = [1, 2, 3, 2, 2, 4, 4, 4, 4, 4]; // مصفوفة الأعداد;

let maxNum = arr[0]; // مبدئيا نعتبر أول رقم هو المتكرر أكثر
let maxCount = 1; // ومبدئيا تكراره واحد

for (let i = 0; i < arr.length; i++) {
  let count = 0; // عداد خاص بالرقم arr[i]

  for (let j = 0; j < arr.length; j++) {
    // نبدأ من أول رقم في المصفوفة
    if (arr[i] === arr[j]) {
      // إذا الرقمين متساويين
      count++; // إذا كان الرقمين متساويين، نزيد العداد
    }
  }

  if (count > maxCount) {
    maxCount = count; // إذا كان العدد أكثر تكراراً، نحدث العداد
    maxNum = arr[i]; // إذا كان العدد أكبر من العدد السابق، نحدث الرقم الأكثر تكراراً
  }
}
console.log(`الرقم الأكثر تكراراً هو ${maxNum} وتكراره ${maxCount}`); // الرقم الأكثر تكراراً هو 2 وتكراره 3




const arr2 = [1, 2, 3, 2, 2, 4, 4, 4, 4, 4]; // مصفوفة الأعداد

const countOccurrences = (arr2) => {
  const countMap = {}; // كائن لتخزين عدد مرات تكرار كل رقم

  // عدّ تكرار كل رقم
  arr2.forEach((num) => {
    countMap[num] = (countMap[num] || 0) + 1; // إذا كان الرقم موجودًا، زد العدد، وإلا اجعله 1
  });

  // استخراج الأرقام المتكررة فقط
  const duplicates = [];
  for (const num in countMap) {
    if (countMap[num] > 1) {
      duplicates.push({ number: Number(num), count: countMap[num] }); // إضافة الرقم وعدد مرات تكراره
    }
  }

  return duplicates;
};

const result = countOccurrences(arr2);
console.log(result);
// الناتج: [{ number: 2, count: 3 }, { number: 4, count: 5 }]