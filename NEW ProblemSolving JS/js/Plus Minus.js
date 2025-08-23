// Given an array of integers, calculate the ratios of its elements that are , ,
//  and . Print the decimal value of each fraction on a new line with 6 places after the decimal.
// Note: This challenge introduces precision problemsth absolute error of up to  are acceptable.
// Example. The test cases are scaled to six decimal places, though answers wi
// There are  elements: two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:
// 0.400000
// 0.400000
// 0.200000
// Function Description
// Complete the plusMinus function in the editor below. It should print the ratios of positive, negative and zero elements in the array.

function plusMinus(arr) {
  let n = arr.length;
  let pos = 0,
    neg = 0,
    zero = 0;

  for (let num of arr) {
    if (num > 0) pos++;
    else if (num < 0) neg++;
    else zero++;
  }

  console.log((pos / n).toFixed(6));
  console.log((neg / n).toFixed(6));
  console.log((zero / n).toFixed(6));
}

// مثال تشغيل:
plusMinus([-4, 3, -9, 0, 4]);

// oop
class PlusMinus {
  constructor(arr) {
    this.arr = arr;
  }

  calculate() {
    let n = this.arr.length;
    let pos = 0,
      neg = 0,
      zero = 0;

    for (let num of this.arr) {
      if (num > 0) pos++;
      else if (num < 0) neg++;
      else zero++;
    }

    console.log((pos / n).toFixed(6));
    console.log((neg / n).toFixed(6));
    console.log((zero / n).toFixed(6));
  }
}

// مثال تشغيل:
const plusMinus = new PlusMinus([-4, 3, -9, 0, 4]);
plusMinus.calculate();


