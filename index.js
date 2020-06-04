// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair="*") {
  return function (adjective='special') {
    return `You are ${visualFlair}${adjective}${visualFlair}!`
  }
}

let Calculator = {
  add: function () {
    return 1 + 3
  },
  subtract: function () {
    return 1 - 3
  },
  multiply: function () {
    return 1 * 3
  },
  divide: function () {
    return 10 / 5
  }
}

function actionApplyer(startingInteger, arrOfFns) {
  if (!arrOfFns.length){
    return startingInteger
  } else {
    let [mult,add,mod] = arrOfFns;
    startingInteger = mult(startingInteger)
    startingInteger = add(startingInteger)
    startingInteger = mod(startingInteger)
    return startingInteger
  }
}
