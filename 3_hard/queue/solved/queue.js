// function addToQueue(runTask) {
//   // addToQueue runs when the 'Queue it up!' button is clicked.

//   // ...

//   // Call runTask when the task is ready to start.
//   runTask(function() {
//     // The function passed to runTask will run when the task is done.

//     // ...
//   });
// }

// first in first out
const queue = [];
let ready = true;
// addToQueue runs when the 'Queue it up!' button is clicked.
function addToQueue(runTask) {
  queue.push(runTask);

  const throttleFunction = () => {
    if (queue.length > 0) {
      if (ready) {
        ready = false;
        const runTask = queue.shift();
        runTask(function () {
          // The function passed to runTask will run when the task is done.
          // ...
          ready = true;
          throttleFunction();
        });
      };
    };
  };

  throttleFunction();
}
