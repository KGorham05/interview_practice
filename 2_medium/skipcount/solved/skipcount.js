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

const checkSkipCountMatrix = matrix => {
  const checkIf2DArrayValuesArePattern = twoDimensionalArray => !(twoDimensionalArray.map(subArray => {
      let difference = subArray[1] - subArray[0];
      let isPattern = true;
      for (let i = 2; i < subArray.length; i++) {
        if (subArray[i] - subArray[i - 1] !== difference) {
          isPattern = false;
        }
      }
      return isPattern;
    }).includes(false))
  
  const getColumn = (arr, n) => arr.map(row => row[n]);
  const columns = matrix[0].map((val, j) => getColumn(matrix, j))
  const rowsArePattern = checkIf2DArrayValuesArePattern(matrix);
  const columnsArePattern = checkIf2DArrayValuesArePattern(columns)

  return rowsArePattern && columnsArePattern ? true : false;
}

console.log(checkSkipCountMatrix(basicSolved));
console.log(checkSkipCountMatrix(basicIncorrect));;