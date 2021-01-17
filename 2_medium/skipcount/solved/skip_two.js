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

const isMatrixValid = matrix => {
  const columns = matrix[0].map((col, i) => matrix.map(row => row[i]));
  const checkIfSkipCount = arr => {
    let difference = arr[1] - arr[0]
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== difference) {
        return false
      }
    }
    return true;
  }
  const doRowsPass = !matrix .map(row => checkIfSkipCount(row)).includes(false)
  const doColsPass = !columns.map(col => checkIfSkipCount(col)).includes(false)
  return doRowsPass && doColsPass
}
