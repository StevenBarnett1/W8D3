function test(time,msg,timeLeft){
  return new Promise((resolve, reject) => {
    if(timeLeft-time<=0)reject(msg.replace(/done/g,"Not enough time for"))
    else{
      setTimeout(() => {
      console.log(msg);
      resolve(timeLeft-time);
    }, time)
    }
    })
}


function stretch(timeLeft) {
  return test(1000,"done stretching",timeLeft)
}


function runOnTreadmill(timeLeft) {
  return test(500,"done running on treadmill",timeLeft)
}


function liftWeights(timeLeft) {
  return test(2000,"done lifting weights",timeLeft)
}


function workout(totalTime) {
  stretch(totalTime)
  .then(runOnTreadmill)
  .then(liftWeights)
  .then(() => console.log("done working out"))
  .catch(err => console.log(err))
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


 //workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


 //workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


 //workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


 workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
