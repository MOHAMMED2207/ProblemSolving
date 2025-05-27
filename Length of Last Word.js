//  Length of Last Word
//  Given a string s consisting of words and spaces,
//  return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
var lengthOfLastWord = function (s) {
  // Trim the string to remove leading and trailing spaces
  s = s.trim();

  // Split the string by spaces to get all words
  const words = s.split(" ");

  // Return the length of the last word
  return words.length > 0 ? words[words.length - 1].length : 0;
};
// Example usage:
console.log(lengthOfLastWord("Hello World")); // Output: 5

