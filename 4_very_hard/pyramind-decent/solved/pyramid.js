const fs = require("fs");
/**
 * 
 * @param {string} inputPath Path to input file
 * @returns {object} target number and 2d array representing the number pyramid 
 */
const parseInputFile = (inputPath) => {
  const inputStr = fs.readFileSync(inputPath, "utf8").trim();
  let [target, ...pyramid] = inputStr.split("\n").map(s => s.trim());
  target = Number(target.replace(/[^\d]/g, ""));
  pyramid = pyramid.map(row => row.split(",").map(n => parseInt(n)));
  return { target, pyramid };
}
/**
 * Performs a depth first search, starting at the top node of the pyramid 
 * where the product of each number traversed equals the target number.
 * @param {number} target The target number
 * @param {Array} pyramid 2d array representing the number pyramid
 * @returns {string} The path through the pyramid where the product of the numbers traversed matches the target
 * written as "LRLL"
 */
const findPath = (target, pyramid) => {
  const stack = [{ x: 0, y: 0, path: "", val: pyramid[0][0] }];  
  // Stack represents nodes to visit
  while (stack.length > 0) {
    // Look at last added node for depth first search
    const current = stack.pop()
    // Check if we've reached the bottom of the pyramid and if the value is the target value, return the path taken
    if (current.y === pyramid.length - 1 && current.val === target) {
      return current.path;
    };
    // At the bottom, no child nodes to add
    if (current.y === pyramid.length - 1) {
      continue;
    };
    // Add child nodes to stack
    const left = {
      x: current.x,
      y: current.y + 1,
      path: current.path + "L",
      val: current.val * pyramid[current.y + 1][current.x],
    };
    stack.push(left);
    const right = {
      x: current.x + 1,
      y: current.y + 1,
      path: current.path + "R",
      val: current.val * pyramid[current.y + 1][current.x + 1],
    };
    stack.push(right);
  };
  // No path was found
  return "No Path Found";
};
// Parses the input file, and returns a path through they pyramid if one exists. 
const solution = (inputFilePath) => {
  const { target, pyramid } = parseInputFile(inputFilePath);
  return findPath(target, pyramid);
};
