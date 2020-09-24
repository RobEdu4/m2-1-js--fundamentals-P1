function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid,
  // using newline characters to separate lines. At each position of the grid
  // there is either an "_" or a "#" character. The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)

  let chessBoard = "";
  let rowCount = 1;
  
  for (let i = 1; i < 65; i++){
    rowCount % 2 !== 0 ? (i % 2 !== 0 ? chessBoard += "#" : chessBoard += "_" ) : (i % 2 ==! 0 ? chessBoard += "_" : chessBoard += "#");
    
    if(i % 8 === 0){
      chessBoard += "\n";
      rowCount++;
    }
  
  }
  
  console.log(chessBoard);


  // Write code between the lines (above)





/*

  let chessBoard = "";
  let rowCount = 1;

  for (let i = 1; i < 65; i++){
    if(rowCount % 2 !== 0){
      if (i % 2 !== 0){
        chessBoard += "#";
      } else if (i % 2 === 0){
        chessBoard += "_";
      }
  }
  if(rowCount % 2 === 0){
    if (i % 2 === 0){
      chessBoard += "#";
    } else if (i % 2 !== 0){
      chessBoard += "_";
    }
  }

    if (i % 8 === 0){
      chessBoard += "\n";
      rowCount++;
    }
  }

  console.log(chessBoard);



/*
  for (let i = 2; i <= 10; i++){
    if (i % 2 === 0){
      console.log("#_#_#_#_");
    } else {
      console.log("_#_#_#_#");
    }
  }
}
*/

let chessBoard = "";
let rowCount = 1;

for (let i = 1; i < 65; i++){
  rowCount % 2 !== 0 ? (i % 2 !== 0 ? chessBoard += "#" : chessBoard += "_" ) : (i % 2 ==! 0 ? chessBoard += "_" : chessBoard += "#");
  
  if(i % 8 === 0){
    chessBoard += "\n";
    rowCount++;
  }

}

console.log(chessBoard);
// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-11

module.exports = exercise11;

}




