// Staircase detail

// This is a staircase of size :

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Function Description

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i); //  i in all steps will be less than n
    let hashes = "#".repeat(i);
    console.log(spaces + hashes);
  }
}
staircase(6);
//============================================================================
console.log("=======================");
//============================================================================
// Staircase class oop
class Staircase {
  constructor(n) {
    this.n = n;
  }

  PrintStaircase() {
    for (let i = 1; i <= this.n; i++) {
      let spaces = " ".repeat(this.n - i);
      let hashes = "#".repeat(i);
      console.log(spaces + hashes);
    }
  }
}

const staircaseObj = new Staircase(10);
staircaseObj.PrintStaircase();
