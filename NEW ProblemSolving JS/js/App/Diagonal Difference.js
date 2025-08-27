// // Diagonal Difference
// المطلوب:
// عندك مصفوفة مربعة (عدد الصفوف = عدد الأعمدة).
// مطلوب تحسب:
// مجموع القطر الرئيسي (من أعلى يسار → أسفل يمين).
// مجموع القطر الثانوي (من أعلى يمين → أسفل يسار).
// وبعدين تجيب القيمة المطلقة للفرق بينهم.
// =============================================================
// matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [9, 8, 9]
// ]
// =============================================================
// لقطر الرئيسي: 1 + 5 + 9 = 15
// القطر الثانوي: 3 + 5 + 9 = 17
// الفرق المطلق: |15 - 17| = 2

function diagonalDifference(arr) {
  let primary = 0; // مجموع القطر الرئيسي
  let secondary = 0; // مجموع القطر الثانوي

  for (let i = 0; i < arr.length; i++) {
    // i = 0 =======> arrr[0][0] = 1
    // i = 1 =======> arrr[1][1] = 5
    // i = 2 =======> arrr[2][2] = 9
    primary += arr[i][i];
    // i = 0 =========> arrr[0][3-1-0][2] = 3
    // i = 1 =========> arrr[1][3-1-1][1] = 5
    // i = 2 =========> arrr[2][3-1-2][0] = 9
    secondary += arr[i][arr.length - 1 - i];
  }
  return Math.abs(primary - secondary);
}
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
console.log(diagonalDifference(matrix));

// oop
class DiagonalDifference {
  constructor(matrix) {
    this.matrix = matrix;
  }

  calculate() {
    let primary = 0;
    let secondary = 0;

    for (let i = 0; i < this.matrix.length; i++) {
      primary += this.matrix[i][i];
      secondary += this.matrix[i][this.matrix.length - 1 - i];
    }

    return Math.abs(primary - secondary);
  }
}
const diagonalDifferencee = new DiagonalDifference(matrix);
console.log(diagonalDifferencee.calculate());
