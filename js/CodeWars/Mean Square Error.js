// Mean Square Error
// Description:
// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.
// Examples
// [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

// Mean Square Error function
function meanSquareError1(firstArray, secondArray) {
  let arrResult = [];
  if (firstArray.length !== secondArray.length) {
    throw new Error("Arrays must be of equal length");
  }
  for (let i = 0; i < firstArray.length; i++) {
    for (let x = 0; x < secondArray.length; x++) {
      if (i === x) {
        arrResult.push(Math.pow(Math.abs(firstArray[i] - secondArray[x]), 2));
      }
    }
  }
  return arrResult.reduce((acc, val) => acc + val, 0) / arrResult.length;
}
// Example usage:
console.log(meanSquareError1([1, 2, 3], [4, 5, 6])); // Output: 9
console.log(meanSquareError1([10, 20, 10, 2], [10, 25, 5, -2])); // Output: 16.5
console.log(meanSquareError1([-1, 0], [0, -1])); // Output: 1





// Another implementation of Mean Square Error function
// This implementation uses a single loop and calculates the squared differences directly
function meanSquareError(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    throw new Error("Arrays must be of equal length");
  }

  let sum = 0;
  for (let i = 0; i < firstArray.length; i++) {
    const diff = firstArray[i] - secondArray[i];
    sum += diff * diff; // Square the difference
  }

  return sum / firstArray.length; // Return the average
}
console.log(meanSquareError([1, 2, 3], [4, 5, 6])); // Output: 9
console.log(meanSquareError([10, 20, 10, 2], [10, 25, 5, -2])); // Output: 16.5
console.log(meanSquareError([-1, 0], [0, -1])); // Output: 1
