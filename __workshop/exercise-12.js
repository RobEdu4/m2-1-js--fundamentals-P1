const exercise13 = require("./exercise-13");

function exercise12() {
  // Exercise 12
  //
  // Write a program that generates a list of all prime numbers from 1 and 200.
  // Prime numbers have exactly two factors.
  // A prime number is a number that is ONLY divisible by 1 and itself.
  //
  // 6 -> NOT prime (2 * 3)
  // 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
  // 12 -> NOT prime (3 * 4, 2 * 6)
  // 37 -> PRIME ()
  //
  //
  // EXPECTED OUTPUT: [2, 3, 5, 7, 11, 13, ...]
  //
  // Write code between the lines (below)

  let primeNums = [1, 2];
  let testNum = 0;

  for (let i = 3; i < 201; i++) {
    let prime = true;
    for (let k = 2; k < i; k++) {
      if (i % k === 0) {
        prime = false;
      }
    }
    if (prime) {
      primeNums.push(i);
    }
  }

  console.log(primeNums);

  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-12
exercise12();
module.exports = exercise12;
