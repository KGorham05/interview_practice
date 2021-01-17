const fs = require("fs");

const parseInputFile = (inputPath) => {
  const inputStr = fs.readFileSync(inputPath, "utf8").trim();
  let [target, ...pyramid] = inputStr.split("\n").map((s) => s.trim());
  console.log(target)
  console.log(pyramid)
  target = target.replace(/[^\d]/g, "");
  target = parseInt(target);
  pyramid = pyramid.map((line) => line.split(",").map((n) => parseInt(n)));
  return { target, pyramid };
};

const findPath = (target, pyramid) => {
  const queue = [{ y: 0, x: 0, path: "", val: pyramid[0][0] }];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.y === pyramid.length - 1 && current.val === target) {
      return current.path;
    }
    if (current.y === pyramid.length - 1) {
      continue;
    }
    const left = {
      x: current.x,
      y: current.y + 1,
      path: current.path + "L",
      val: current.val * pyramid[current.y + 1][current.x],
    };
    queue.push(left);
    const right = {
      x: current.x + 1,
      y: current.y + 1,
      path: current.path + "R",
      val: current.val * pyramid[current.y + 1][current.x + 1],
    };
    queue.push(right);
  }
  return "";
};

const solution = (inputFilePath) => {
  const { target, pyramid } = parseInputFile(inputFilePath);
  return findPath(target, pyramid);
};

console.log(solution("./pyramid_sample_input.txt"))