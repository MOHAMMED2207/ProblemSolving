// 🎯 نكمل الآن التمارين العادية بالـ 3 طرق
// ✅ التمرين 3:
// أوجد عدد الحروف المتحركة في سلسلة.
// مثلاً: "hello world" → عدد الحروف المتحركة = 3 (e, o, o)

// ✅ الحل العادي (Plain JavaScript) === (1)
function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello world")); // 3

// ✅ الحل العادي (Plain JavaScript) === (2)
function countVowels(str) {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter((char) => vowels.includes(char)).length;
}
console.log(countVowels("hello world")); // 3

// 💎 Clean Code
const isVowel = (char) => "aeiou".includes(char.toLowerCase()); // true or false
const countVowelsClean = (str) => str.split("").filter(isVowel).length;
console.log(countVowelsClean("javascript is awesome")); // 8

// test code ========================================================
function countVowels(str) {
  const Vowels = "aeoiu";
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (Vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("mohammed")); // 3 // o/a/e = vowels
