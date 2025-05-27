// Complete the solution so that it splits the string into pairs of two characters.
//  If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  const pairs = [];

  for (let i = 0; i < str.length; i++) {
    if (i + 1 <= str.length) {
      pairs.push(str[i] + (str[i + 1] || "_"));
      i++; // Skip the next character since we are pairing
    }
  }
  return pairs;
}
console.log(solution("abcd")); // Output: ['a', 'b', 'c']
