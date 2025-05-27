// Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function (nums, target) {
  return nums.reduce((acc, num, index) => {
    const complement = target - num;
    if (acc.length === 0 && nums.includes(complement, index + 1)) {
      acc.push(index);
      acc.push(nums.indexOf(complement, index + 1));
    }
    return;
  }, []);
};
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

// Another example:
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const completion = target - nums[i];
    if (completion in map) {
      //check key
      return [map[completion], i];
    }
    //store current val : index
    map[nums[i]] = i;
  }
  return [];
};






// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

var findMedianSortedArrays = function (nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);
  
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
}
// Example usage:
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0    
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
// Another example: 