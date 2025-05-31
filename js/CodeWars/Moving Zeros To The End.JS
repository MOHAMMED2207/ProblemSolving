// Moving Zeros To The End
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  return arr
    .filter((item) => item !== 0 || typeof item === "boolean")
    .concat(arr.filter((item) => item === 0));
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // Output: [false, 1, 1, 2, 1, 3, "a", 0, 0]

// Another implementation using a single loop
function moveZerosSingleLoop(arr) {
  let result = [];
  let zeroCount = 0;
  // Count the number of zeros and collect non-zero items
  for (let item of arr) {
    if (item === 0 && typeof item !== "boolean") {
      zeroCount++;
    } else {
      result.push(item);
    }
  }

  // Add the zeros at the end
  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }

  return result;
}
console.log(moveZerosSingleLoop([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // Output: [false, 1, 1, 2, 1, 3, "a", 0, 0]
