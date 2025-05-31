// // Roman Numerals Helper
// // Description:
// // Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

// // Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

// // 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
// // 2008 is written as 2000=MM, 8=VIII; or MMVIII
// // 1666 uses each Roman symbol in descending order: MDCLXVI.
// // Input range : 1 <= n < 4000

// // In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// // Examples
// // to roman:
// // 2000 -> "MM"
// // 1666 -> "MDCLXVI"
// //   86 -> "LXXXVI"
// //    1 -> "I"

// // from roman:
// // "MM"      -> 2000
// // "MDCLXVI" -> 1666
// // "LXXXVI"  ->   86
// // "I"       ->    1

// // +--------+-------+
// // | Symbol | Value |
// // +--------+-------+
// // |    M   |  1000 |
// // |   CM   |   900 |
// // |    D   |   500 |
// // |   CD   |   400 |
// // |    C   |   100 |
// // |   XC   |    90 |
// // |    L   |    50 |
// // |   XL   |    40 |
// // |    X   |    10 |
// // |   IX   |     9 |
// // |    V   |     5 |
// // |   IV   |     4 |
// // |    I   |     1 |
// // +--------+-------+
let romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function toRoman(num) {
  let result = "";

  for (let char in romanNumerals) {
    for (; num >= romanNumerals[char]; num -= romanNumerals[char]) {
      result += char;
    }
  }
  return result;
}
console.log(toRoman(2000)); // Output: "MM"

function fromRoman(roman) {
  let total = 0;
  let i = 0;
  while (i < roman.length) {
    let currentSymbol = roman[i];
    let nextSymbol = roman[i + 1];

    // Check if the next symbol exists and if the current symbol is less than the next one
    if (
      nextSymbol &&
      romanNumerals[currentSymbol] < romanNumerals[nextSymbol]
    ) {
      // Subtract the value of the current symbol from the next symbol
      total += romanNumerals[nextSymbol] - romanNumerals[currentSymbol];
      i += 2; // Move past both symbols
    } else {
      // Otherwise, add its value
      total += romanNumerals[currentSymbol];
      i++; // Move to the next symbol
    }
  }

  return total;
}
console.log(fromRoman("MDCLXVI")); // Output: 2000
