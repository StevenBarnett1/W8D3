function test(time,msg){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, time)
  })
}

function stretch() {
  return test(1000,"done stretching")
}
function runOnTreadmill() {
  return test(500,"done running on treadmill")
}
function liftWeights() {
  return test(2000,"done lifting weights")
}
function workout() {
  stretch()
  .then(runOnTreadmill)
  .then(liftWeights)
  .then(() => console.log("done working out"))

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
