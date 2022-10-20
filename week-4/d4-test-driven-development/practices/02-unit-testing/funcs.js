function isFive(num) {
  // Your code here
  if (num === 5) {
    return true;
  }
  else {
    return false;
  }
}

function isOdd(number) {
  // Your code here
  if (typeof number !== "number") {
    throw new Error("Not a number!")
  }

  if (Math.abs(number) % 2 === 1) {
    return true;
  }
  if (Math.abs(number) % 2 === 0) {
    return false;
  }
}

console.log(isOdd(5))
console.log(isOdd(-1000))

function myRange(min, max, step = 1) {
  let output = []
  for (let i = min; i <= max; i += step) {
    output.push(i)
  }
  return output;

}

module.exports = { isFive, isOdd, myRange };

