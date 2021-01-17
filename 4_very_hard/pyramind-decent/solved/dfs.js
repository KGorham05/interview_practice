const fs = require("fs");
/**
 * @param {string} inputPath Path to the input file.
 * @returns {Object} target number and 2d array representation of number pyramid.
 */
const parseInputFile = (inputPath) => {
  const inputStr = fs.readFileSync(inputPath, "utf8").trim();
  let [target, ...pyramid] = inputStr.split("\n").map((s) => s.trim());
  target = target.replace(/[^\d]/g, "");
  target = parseInt(target);
  pyramid = pyramid.map((line) => line.split(",").map((n) => parseInt(n)));
  return { target, pyramid };
};
/**
 * Performs a depth first search from the top node of a pyramid of numbers where the product of each number
 * traversed equals a given target number. The returned value is a string representation of the path.
 * @param {number} target The target number. All nodes in the path should have a product equal to the target.
 * @param {Array} pyramid 2D array of numbers representing a number pyramid. Must contain at least 1 row.
 * @returns {string} The path through the pyramid. e.g. "LRRL"
 */
const findPath = (target, pyramid) => {
  // stack represents nodes to visit
  const stack = [{ y: 0, x: 0, path: "", val: pyramid[0][0] }];
  while (stack.length > 0) {
    // visit last added node for depth first search
    const current = stack.pop();
    // return path if at the bottom row and product is equal to the target
    if (current.y === pyramid.length - 1 && current.val === target) {
      return current.path;
    }
    // at the bottom row, no child nodes to add
    if (current.y === pyramid.length - 1) {
      continue;
    }
    // add child nodes to stack
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
  }
  // no path was found
  return "";
};
// Reads the given input file and returns a path through the pyramid if one exists.
const solution = (inputFilePath) => {
  const { target, pyramid } = parseInputFile(inputFilePath);
  return findPath(target, pyramid);
};