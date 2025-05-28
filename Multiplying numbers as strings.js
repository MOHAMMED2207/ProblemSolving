// Multiplying numbers as strings
// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

// Usage of BigInt is disallowed and will be checked in the full test suite.

function multiply(num1, num2) {
  // إذا كان أحد الرقمين صفرًا، الناتج صفر.
  if (num1 === "0" || num2 === "0") return "0";

  const len1 = num1.length;
  const len2 = num2.length;
  const result = new Array(len1 + len2).fill(0);

  // نبدأ الضرب من اليمين لليسار
  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      const mul = (num1[i] * 1) * (num2[j] * 1); // نحول الحرف إلى رقم
      const p1 = i + j;
      const p2 = i + j + 1;

      const sum = mul + result[p2];

      result[p2] = sum % 10;           // الخانة الحالية
      result[p1] += Math.floor(sum / 10); // الحمل (carry)
    }
  }

  // تحويل المصفوفة إلى سلسلة وإزالة الأصفار من البداية
  return result.join('').replace(/^0+/, '');
}

// Example usage:
console.log(multiply("123", "456")); // Output: "56088"
// Example usage with large numbers:
console.log(multiply("123456789", "987654321")); // Output: "121932631112635269"
