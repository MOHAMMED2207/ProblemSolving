// التمرين الخامس:
// تحقق إذا كانت الكلمة "Palindrome"
// كلمة الـ Palindrome هي اللي تقرأ نفس الشي من الأمام والخلف، مثل:
// "madam" ✅
// "hello" ❌
// "racecar" ✅

// ✅ 1. الحل العادي (Plain JavaScript)
const isPalindrome = (str) => {
  const reversed = [...str].reverse().join("");
  return str === reversed;
};
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// 💎 2. Clean Code
const reverse = (s) => [...s].reverse().join("");
const isCleanPalindrome = (str) => str === reverse(str);

console.log(isCleanPalindrome("racecar")); // true
console.log(isCleanPalindrome("world")); // false
