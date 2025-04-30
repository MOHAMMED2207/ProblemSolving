// 🚀 جاهز للتمرين 11؟
// أقترح:
// "جمع الأرقام الموجودة داخل string."
// مثال: "a1b2c3" → 1 + 2 + 3 = 6

// ✅ 2. Using ES6+ features
// 💎 2. Clean Code
const str = "a1b2c3";
const sumOfDigits = str
  .split("")
  .filter((str) => !isNaN(str) && str !== " ")
  .reduce((acc, curr) => acc + Number(curr), 0); // Convert each character to a number and sum them up
// Split the string into an array of characters

console.log(sumOfDigits); // Output: 6

// ✅ 3. Using a loop
const str2 = "a1b2c3";
const sumOfDigits2 = (str) => {
  let sum = 0; // Initialize a variable to hold the sum
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      sum += Number(str[i]); // Convert the character to a number and add it to the sum
    }
  }
  return sum;
};
console.log(sumOfDigits2(str2)); // Output: 6
