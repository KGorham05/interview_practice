const fs = require("fs");

const parseInputFile = (inputPath) => {
  const inputString = fs.readFileSync(inputPath, "utf8").trim();
  let [target, ...pyramid] = inputString.split("\n").map(s => s.trim());
  target = Number(target.replace(/[^\d]/g, ""));
  pyramid = pyramid.map(row => row.split(",").map(n => Number(n)));
  return { target, pyramid };
}

const findPath = (target, pyramid) => {
  const stack = [{x: 0, y: 0, path: "", val: pyramid[0][0]}]
  while (stac.length > 0) {
    const current = stack.pop();
    if (current.y === pyramid.length - 1 && current.val === target) {
      return current.path;
    }
    if (current.y === pyramid.length - 1) {
      continue;
    }
    const left = {
      x: current.x, 
      y: current.y + 1, 
      path: `${current.path}L`, 
      val: current.val * pyramid[current.x][current.y + 1]
    }
    const right = {
      x: current.x + 1, 
      y: current.y + 1, 
      path: `${current.path}R`, 
      val: current.val * pyramid[current.x + 1][current.y + 1]
    }
    stack.push(left, right)
  }
  return "";
}

const solution = (inputFilePath) => {
  const { target, pyramid } = parseInputFile(inputFilePath);
  return findPath(target, pyramid);
}

console.log(solution("./pyramid_sample_input.txt"))