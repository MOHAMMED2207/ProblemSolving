// 🚀 التمرين الثامن؟
// أقترح:

// "تحويل أول حرف في كل كلمة إلى حرف كبير (capitalize)."
// مثلاً: "hello world" → "Hello World"

// ✅ 1. Plain JavaScript
const str = "Problem Solving";
const words = str.split(" ");
let result = "";
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  const capitalized = word[0].toUpperCase() + word.slice(1);
  result += capitalized + " ";
}
console.log(result.trim()); // "Hello World"

//-------------------------------------------------------------------

// 💎 2. Clean Code
const capitalize = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
console.log(capitalize("hello world")); // "Hello World"
