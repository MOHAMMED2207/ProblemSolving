// Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.
// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

function longestPalindrome(s) {
  if (s.length < 2) return s;

  let start = 0;
  let maxLength = 1;

  const expandFromCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  Array.from(s).forEach((_, i) => {
    const oddLength = expandFromCenter(i, i); // مثال: "aba"
    const evenLength = expandFromCenter(i, i + 1); // مثال: "abba"

    const currentLength = Math.max(oddLength, evenLength);

    if (currentLength > maxLength) {
      maxLength = currentLength;
      start = i - Math.floor((currentLength - 1) / 2);
    }
  });

  return s.slice(start, start + maxLength);
}
// Example usage:
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"100ms
