// Convert string to camel case

//  This function converts a string with words separated by hyphens or underscores into camel case format.
// //  For example, "Hello-world_pepole" becomes "helloWorld".

// 💎 2. Clean Code
function toCamelCase(str) {
  let word = str.split(/[-_]/);
  let result = word[0];
  return (
    result +
    word
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")
  );
}

console.log(toCamelCase("Hello-world_pepole")); // helloWorld
