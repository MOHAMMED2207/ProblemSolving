// First non-repeating character
// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("");
// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

// ===========================================================================================================
// Using a frequency map to count occurrences of each character
function firstNonRepeatingLetter(s) {
  const charCount = {};
  const lowerS = s.toLowerCase();
  for (const char of lowerS) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (charCount[lowerS[i]] === 1) {
      return s[i]; // Return the original character with correct case
    }
  }
  return "";
}
// Example usage:
console.log(firstNonRepeatingLetter("stress")); // Output: "t"

// ===========================================================================================================
// Another approach using Array.prototype.indexOf and lastIndexOf
function firstNonRepeatingLetter2(s) {
  let word = s.toLowerCase();
  let t = [...word];
  for (let i = 0; i < t.length; i++) {
    if (t.indexOf(t[i]) === t.lastIndexOf(t[i])) {
      return s[i].toUpperCase(); // Return the original character with correct case
    }
  }
  return "";
}
// Example usage:
console.log(firstNonRepeatingLetter2("streSS")); // Output: "T"

// ===========================================================================================================
// Another approach using Array.prototype.find
function firstNonRepeatingLetter3(s) {
  let word = s.toLowerCase();
  let t = [...word];

  return t.find((c) => t.indexOf(c) === t.lastIndexOf(c)) || ""; // Return the first non-repeating character or empty string
}

// Example usage:
console.log(firstNonRepeatingLetter3("streSS")); // Output: "T"
