// Create a function
// Takes in a solved Matrix
// returns true : false if it is solved correctly
// solved correctly means we have pattern in both rows
// and columns (diagonals do not matter)

// sample inputs
const basicSolved = [
    [23, 28, 33],
    [19, 18, 17],
    [15, 8, 1]
  ];
  
  const basicIncorrect = [
    [23, 28, 33],
    [19, 18, 17],
    [16, 8, 1]
  ];

// Write your function here



// Tests

console.log(checkSkipCountMatrix(basicSolved)); // return true
console.log(checkSkipCountMatrix(basicIncorrect));; // returns false

