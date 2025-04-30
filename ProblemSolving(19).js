// ✅ التمرين 19:
// 🔠 تحويل جملة إلى camelCase
// مثلاً: "hello world again" → "helloWorldAgain"

// ملاحظات:
// - يجب أن تكون الحروف الأولى من الكلمات الأخرى كبيرة
// - يجب أن لا يكون هناك مسافات بين الكلمات
// - يجب أن لا يكون هناك أي رموز خاصة أو أرقام في الجملة
// - يجب أن لا يكون هناك أي حروف كبيرة في الجملة الأصلية

// 💎 1. Clean Code
const toCamelCase = (str) => {
  const [first, ...rest] = str.split(" "); // تقسيم الجملة إلى كلمات
  return first + rest.map((w) => w[0].toUpperCase() + w.slice(1)).join("");
};
console.log(toCamelCase("hello world again")); // helloWorldAgain

// 💎 map + join + split
const str = "hello world again"; // الجملة المراد تحويلها
const words = [...str.split(" ")] // تحويل الجملة إلى مصفوفة من الكلمات
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // تحويل الحرف الأول من كل كلمة إلى حرف كبير
  .join(""); // دمج الكلمات مرة أخرى
console.log(words); // helloWorldAgain

console.log(
  "=========================================================================="
);

// 💎 for
const strfn = "hello world again"; // الجملة المراد تحويلها
const wordsfn = strfn.split(" "); // ['hello', 'world', 'again']
let result = wordsfn[0]; // hello
for (let i = 1; i < wordsfn.length; i++) {
  // ['world', 'again']
  result += wordsfn[i][0].toUpperCase() + wordsfn[i].slice(1); // تحويل الحرف الأول من كل كلمة إلى حرف كبير
}
console.log(result); // helloWorldAgain
