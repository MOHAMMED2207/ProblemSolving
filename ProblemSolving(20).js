// ✅ التمرين 20:
// ⏪ عكس string
// "hello" → "olleh"
// "hello world" → "dlrow olleh"

// ✅ 1. Plain JavaScript // for loop
const str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed); // olleh
//-----------------------------------------------------------------------------------
// 💎 1. Clean Code
const reversedStr = [...str].reverse().join(""); // عكس الجملة
console.log(reversedStr); // olleh

console.log([] + {}); // ? // [object Object] // [] == ""
console.log({} + []); // ? // [object Object] // [] == ""
console.log({} + {}); // ? // [object Object][object Object]
console.log([] + []); // ? //  ""
