// 🚀 التمرين العاشر؟
// أقترح:

// "احذف كل القيم الـ falsy من مصفوفة."
// (false, 0, "", null, undefined, NaN)
// مثلاً: [0, "hi", "", null, 5] → ["hi", 5]

// ✅ 1. Plain JavaScript
const arr = [0, "hi", "", null, 5, false, NaN];
const filteredArr = arr.filter(Boolean); // Filter out falsy values using Boolean constructor
console.log(filteredArr); // ["hi", 5]

// ✅ 2. Using ES6+ features
// 💎 2. Clean Code
const arr2 = [0, "hi", "", null, 5, false, NaN];
const filterFalsyValues = (arr) => arr.filter(Boolean); // Filter out falsy values using Boolean constructor
console.log(filterFalsyValues(arr2)); // ["hi", 5]

// ✅ 3. Using a loop
const arr3 = [0, "hi", "", null, 5, false, NaN];
const filteredArr3 = [];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i]) {
    filteredArr3.push(arr3[i]); // Push only truthy values to the new array
  }
}
console.log(filteredArr3); // ["hi", 5]

// ✅ 4. Using recursion
const arr4 = [0, "hi", "", null, 5, false, NaN];
const removeFalsyValues = (arr) => {
  if (arr.length === 0) return []; // Base case: if the array is empty, return an empty array
  const [first, ...rest] = arr; // Destructure the first element and the rest of the array

  //   first = أول عنصر في المصفوفة.
  // rest = مصفوفة تحتوي على باقي العناصر.

  //   first = 0
  // rest = ["hi", "", null, 5, false, NaN]

  return (first ? [first] : []).concat(removeFalsyValues(rest)); // Concatenate the first element if it's truthy with the result of the recursive call
};
console.log(removeFalsyValues(arr4)); // ["hi", 5]

// 🧠 تمرين عليك:
// طبّقها على [undefined, "JS", 0, "", 42, null]
// وشوف النتيجة 👀
// عايز تشوفه بثلاث طرق؟ ابعته وأنا أشتغل عليه معاك!

// ✅ 5. Using Array.prototype.reduce()
const arr5 = [undefined, "JS", 0, "", 42, null];
const filteredArr5 = arr5.reduce(
  (acc, curr) => (curr ? [...acc, curr] : acc),
  []
);
// Reduce to build a new array with only truthy values
// initial: []
// iteration 1: curr=undefined => []
// iteration 2: curr="JS" => ["JS"]
// iteration 3: curr=0 => ["JS"]
// iteration 4: curr="" => ["JS"]
// iteration 5: curr=42 => ["JS", 42]
// iteration 6: curr=null => ["JS", 42]
console.log(filteredArr5); // ["JS", 42]

const arr6 = [undefined, "JS", 0, "", 42, null];
const filterArr = (arr) => arr.filter(Boolean); // Filter out falsy values using Boolean constructor
console.log(filterArr(arr6)); // ["JS", 42]
