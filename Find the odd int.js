// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// 🎯 ما هدف هذا الكود؟
// الكود يبحث عن الرقم الوحيد في المصفوفة اللي يتكرر عدد فردي من المرات، ثم يرجعه.
// في [1, 1, 2, 2, 3, 3, 3]
// 1 تكرر مرتين ✅ زوجي
// 2 تكرر مرتين ✅ زوجي
// 3 تكرر ثلاث مرات ❗ فردي → الكود يرجع 3

function findOdd(A) {
  const countMap = A.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  for (const num in countMap) {
    if (countMap[num] % 2 !== 0) {
      return parseInt(num, 10);
    }
  }
  return null;
  countMap;
}
console.log(findOdd([1, 1, 2, 2, 3, 3, 3])); // Output: 4
