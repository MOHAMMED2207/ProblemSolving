// Counting Change Combinations
// Description:
// Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

// 1+1+1+1, 1+1+2, 2+2.
// The order of coins does not matter:

// 1+1+2 == 2+1+1
// Also, assume that you have an infinite amount of coins.

// Your function should take an amount to change and an array of unique denominations for the coins:

//   countChange(4, [1,2]) // => 3
//   countChange(10, [5,2,3]) // => 4
//   countChange(11, [5,7]) //  => 0
function countChange(money, coins) {
  const dp = Array(money + 1).fill(0);
  dp[0] = 1; // There's one way to make change for 0 money

  for (const coin of coins) {
    for (let j = coin; j <= money; j++) {
      dp[j] += dp[j - coin]; // Update the number of ways to make change for j

      // [1,0,0,0,0] → dp[0] = 1 (base case)
      // Example for coin = 1:
      // 🪙 نبدأ بأول عملة: coin = 1
      //
      // j = 1 → dp[1] += dp[1 - 1] → dp[1] += dp[0] → dp[1] = 1
      // [1,1,0,0,0] → dp[1] = 1
      //
      // j = 2 → dp[2] += dp[2 - 1] → dp[2] += dp[1] → dp[2] = 1
      // [1,1,1,0,0] → dp[2] = 1
      //
      // j = 3 → dp[3] += dp[2] → dp[3] = 1
      // [1,1,1,1,0] → dp[3] = 1
      //
      // j = 4 → dp[4] += dp[3] → dp[4] = 1
      // [1,1,1,1,1] → dp[4] = 1
      //
      // [1,1,1,1,1] → dp[0] = 1 (base case remains)
      // Example for coin = 2:
      // 🪙 نكمل بعملة 2:

      // j = 2 → dp[2] += dp[2 - 2] → dp[2] += dp[0] → dp[2] = 2
      // [1,1,2,1,1] → dp[2] = 2
      //
      // j = 3 → dp[3] += dp[1] → dp[3] = 2
      // [1,1,2,2,1] → dp[3] = 2
      //
      // j = 4 → dp[4] += dp[2] → dp[4] = 3
      // [1,1,2,2,3] → dp[4] = 3
    }
  }

  return dp[money];
}
// Example usage:
console.log(countChange(4, [1, 2])); // => 3

// Recursive solution
// This is a recursive solution to count the number of ways to make change for a given amount of money using the provided coin denominations.
var countChange = function (money, coins) {
  if (money < 0 || coins.length === 0) return 0;
  else if (money === 0) return 1;
  else
    return (
      countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
    );
};

// Example usage:
console.log(countChange(4, [1, 2])); // => 3
