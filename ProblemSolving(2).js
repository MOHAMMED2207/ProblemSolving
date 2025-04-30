// 🔍 لغز 2: هل الكلمتين أناغرام (Anagrams)؟
// "Dormitory" و "Dirty Room"

function isAnagram(str1, str2) {
  const format = (str) =>
    str.toLowerCase().replace(/\s/g, "").split("").sort().join("");
  return format(str1) === format(str2);
}
console.log(isAnagram("Dormitory", "Dirty Room")); // true

// 🧠 الشرح:
// نحذف المسافات، نحول الحروف لصغيرة، نرتبهم، ونقارن.

// test code ========================================================
function isAnagram(str1, str2) {
  const format = (str) =>
    str.toLowerCase().replace(/\s/g, "").split("").sort().join("");
  return format(str1) === format(str2);
}

console.log(isAnagram("abc", "cba")); // true
console.log(isAnagram("abc", "rffb")); // false
