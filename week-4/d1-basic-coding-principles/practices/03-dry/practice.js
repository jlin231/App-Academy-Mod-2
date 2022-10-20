function multiplyBiggerNumByTwo(num1, num2) {
  if (greaterThan(num1, num2)) {
    return num1 * 2;
  } else {
    return num2 * 2;
  }
}

function divideBiggerNumByThree(num1, num2) {
  if (greaterThan(num1, num2)) {
    return num1 / 3;
  } else {
    return num2 / 3;
  }
}

function eatMostTacos(sum1, sum2) {
  if (greaterThan(sum1, sum2)) {
    return `I ate ${sum1} tacos.`;
  } else {
    return `I ate ${sum2} tacos.`;
  }
}

function adoptSmallerDog(weight1, weight2) {
  if (greaterThan(weight2, weight1)) {
    return `I adopted a dog that weighs ${weight1} pounds.`;
  } else {
    return `I adopted a dog that weighs ${weight2} pounds.`;
  }
}

function greaterThan(ele1, ele2) {
  return ele1 > ele2
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
