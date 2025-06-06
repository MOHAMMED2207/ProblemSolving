// Unique In Order
// Implement the function unique_in_order which takes as argument a sequence and
// returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
  if (!iterable || iterable.length === 0) {
    return [];
  }

  let result = [];
  let lastElement;
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== lastElement) {
      result.push(iterable[i]);
      lastElement = iterable[i];
    }
  }
  return result;
};
console.log(uniqueInOrder("AAAABBBCCDAABBB")); // Output: ['A', 'B', 'C', 'D', 'A', 'B']
