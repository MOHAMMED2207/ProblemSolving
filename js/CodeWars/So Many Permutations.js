// So Many Permutations!
// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.
// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

function permutations(string) {
  if (string.length <= 1) return [string];

  const results = new Set(); // Use a Set to avoid duplicates

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const remainingChars = string.slice(0, i) + string.slice(i + 1);
    const subPermutations = permutations(remainingChars);

    for (const perm of subPermutations) {
      results.add(char + perm); // Add the current character to the front of each permutation
    }
  }

  return Array.from(results); // Convert the Set back to an array
}
// Example usage:
// console.log(permutations("ab")); // Output: ['ab', 'ba']

function permutations(str) {
  return str.length <= 1
    ? [str]
    : Array.from(
        new Set(
          str
            .split("")
            .map((char, i) =>
              permutations(str.substr(0, i) + str.substr(i + 1)).map(
                (p) => char + p 
              )
            )
            .reduce((r, x) => r.concat(x), [])
        )
      );
}
// Example usage:
console.log(permutations("abc")); // Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
