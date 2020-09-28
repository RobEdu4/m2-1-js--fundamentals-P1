function exercise10() {
  // Exercise 10
  //
  // Write a loop that makes seven calls to console.log to
  // output the following triangle:
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  //
  // Write code between the lines (below)

  for (let i = 1; i < 8; i++) {
    let poundLayout = "";
    for (let j = 0; j < i; j++) {
      poundLayout += "#";
    }
    console.log(poundLayout);
  }

  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-10

module.exports = exercise10;
