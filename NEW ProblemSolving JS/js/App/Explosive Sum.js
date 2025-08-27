// Explosive Sum
// How many ways can you make the sum of a number?
// From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)

// In number theory and combinatorics,
//  a partition of a positive integer n,
//  also called an integer partition,
//  is a way of writing n as a sum of positive integers.
//   Two sums that differ only in the order of their summands are considered the same partition.
//   If order matters, the sum becomes a composition.
//   For example, 4 can be partitioned in five distinct ways:
//   Number => ( 4 )
//    ____  => 3 + 1
//    ____  => 2 + 2
//    ____  => 2 + 1 + 1
//    ____  => 1 + 1 + 1 + 1

function explosiveSum(n) {
  const result = [];
  const findPartitions = (n, max, current) => {
    if (n === 0) {
      result.push(current);
      return;
    }
    for (let i = Math.min(n, max); i > 0; i--) {
      findPartitions(n - i, i, [...current, i]);
      //   أول لفة (i = 2): Math.min(2,2) = 2
      //  findPartitions(2-2,2,[ 2]) → findPartitions(0,2,[2]) Accepted

      //   ثاني لفة (i = 1): Math.min(1,1) = 1
      //  findPartitions(2-1,1,[ 1]) → findPartitions(1,1,[ 1])  Rejected

      //ثالث لفة (i = 1): Math.min(1,1) = 1
      // findPartitions(2-1,1,[ 1]) → findPartitions(1,1,[ 1])  Rejected

      // findPartitions(2,2,[])
      // ├─ i=2 → findPartitions(0,2,[2])  -> push [2]
      // └─ i=1 → findPartitions(1,1,[1])
      //          └─ i=1 → findPartitions(0,1,[1,1]) -> push [1,1]
    }
  };
  findPartitions(n, n, []);
  return result;
}

console.log(explosiveSum(2)); // Output: [ [ 4 ], [ 3, 1 ], [ 2, 2 ], [ 2, 1, 1 ], [ 1, 1, 1, 1 ] ]

// other solution
function explosiveSumDP(n) {
    const dp = Array.from({ length: n + 1 }, () => []);
    dp[0] = [[]]; // Base case: There's one way to sum to 0 (using no numbers)
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
        for (const partition of dp[i - j]) {
            if (partition.length === 0 || j <= partition[partition.length - 1]) {
            dp[i].push([...partition, j]);
            }
        }
        }
    }
    
    return dp[n];
}

console.log(explosiveSumDP(4)); // Output: [ [ 4 ], [ 3, 1 ], [ 2, 2 ], [ 2, 1, 1 ], [ 1, 1, 1, 1 ] ]

