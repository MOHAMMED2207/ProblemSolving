// Mini-Max Sum

function miniMaxSum(arr) {
    let total = arr.reduce((a, b) => a + b, 0);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let minSum = total - max;
    let maxSum = total - min;
    console.log(minSum + " " + maxSum);
}

// // مثال:
miniMaxSum([1, 3, 5, 7, 9]); // Output: 16 24







// 
function miniMaxSum(arr) {
  let total = arr.reduce((a, b) => a + b, 0);
  arr.sort((a, b) => b - a);
  maxVal = total - arr[0];
  minVal = total - arr[arr.length - 1];
  console.log(maxVal);
  console.log(minVal);
}
miniMaxSum([1, 3, 5, 7, 9]);
