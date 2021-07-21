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
  let array = [stretch(),runOnTreadmill(),liftWeights()]
  let superPromise = Promise.all(array)
  superPromise
    .then(()=> console.log("done working out"))
    .catch(err => console.log(err))
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done running on treadmill
    // done stretching
    // done lifting weights
    // done working out
