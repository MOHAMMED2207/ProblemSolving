// Snail
// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element,
//  traveling clockwise.
// You can return the answer in a clockwise spiral order as a 1D array.
function snail(array) {
  let result = [];
  if (array.length === 0) return result;
  while (array.length) {
    // Add the first row
    result.push(...array.shift());
    // Add the last element of each remaining row
    for (let i = 0; i < array.length; i++) {
      if (array[i].length) {
        result.push(array[i].pop());
      }
    }

    // Add the last row in reverse order
    if (array.length) {
      result.push(...array.pop().reverse());
    }

    // Add the first element of each remaining row in reverse order
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i].length) {
        result.push(array[i].shift());
      }
    }
    // Remove empty rows
    array = array.filter((row) => row.length > 0);
  }

  return result;
}
// Example usage:
console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
