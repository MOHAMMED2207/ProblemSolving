// Generate Fibonacci Sequence
// Write a generator function that returns a generator object which yields the fibonacci sequence.
// The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.


// Example 1:

// Input: callCount = 5
// Output: [0,1,1,2,3]
// Explanation:
// const gen = fibGenerator();
// gen.next().value; // 0
// gen.next().value; // 1
// gen.next().value; // 1
// gen.next().value; // 2
// gen.next().value; // 3

var fibGenerator = function*() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }   

};
// Example usage:
let gen = fibGenerator();   
let callCount = 5;
let output = [];
for (let i = 0; i < callCount; i++) {
    output.push(gen.next().value);
}
console.log(output); // Output: [0, 1, 1, 2, 3]



// Another example:
var fibGenerator = function*() {
    let [current, next] = [0, 1]

    while (true) {
        yield current;

        [current, next] = [next, current + next]
    }
};
// Example usage:
let gen2 = fibGenerator();  
let callCount2 = 5;
let output2 = [];   
for (let i = 0; i < callCount2; i++) {
    output2.push(gen2.next().value);
}
console.log(output2); // Output: [0, 1, 1, 2, 3, 5, 8, 13]





