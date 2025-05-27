// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false

function isIsogram(str) {
  let Word_Slice = str.toLowerCase().split("");
  let uniqueChars = new Set(Word_Slice);
  return uniqueChars.size === Word_Slice.length;
}
console.log(isIsogram("aba")); // Output: false

// Another solution using Set
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
console.log(isIsogram("Dermatoglyphics")); // Output: true
// Output: true

// A more concise solution using Set and a single return statement
function isIsogram(str) {
  return !str || str.length === new Set(str.toLowerCase()).size;
}
console.log(isIsogram("Dermatoglyphics")); // Output: true
console.log(isIsogram("aba")); // Output: false
