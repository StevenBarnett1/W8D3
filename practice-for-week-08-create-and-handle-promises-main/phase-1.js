function stretch() {
  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      console.log('done stretching');
      fulfill();
    }, 1000)
  })
}
function runOnTreadmill() {
  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      console.log('done running on treadmill');
      fulfill();
    }, 500)
  })
}
function liftWeights() {
  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      console.log('done lifting weights');
      fulfill();
    }, 2000)
  })
}
function workout() {
  stretch().then(runOnTreadmill).then(liftWeights).then(() => {
    return new Promise((resolve) => {
      console.log('done working out');
      resolve();
    })
  });
  // console.log('done working out');
}
/* ============================ TEST YOUR CODE ============================
Run the file (`node phase-1.js`) and check your output against the expected
output.
*/
workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
