// Highest Scoring Word
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const words = x.split(" ");

  let highestScore = 0;
  let highestWord = "";

  for (const word of words) {
    const score = [...word].reduce(
      (sum, char) => sum + alphabet.indexOf(char) + 1,
      0
    );

    if (score > highestScore) {
      highestScore = score;
      highestWord = word;
    }
  }

  return highestWord;
}

// Example usage:
console.log(high("helloklmklja")); // Output: "world"

// Another implementation using a different approach
function high(words) {
  const alpha = " abcdefghijklmnopqrstuvwxyz";
  const score = (word) =>
    word.split("").reduce((a, b) => a + alpha.indexOf(b), 0);

  return words
    .split(" ")
    .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
    .sort((a, b) => a.score - b.score || b.pos - a.pos)
    .pop().word;
}
console.log(high("hello world")); // Output: "world"
