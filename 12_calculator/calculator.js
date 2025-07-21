const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let result = 0;
  array.forEach(num => {
    result += num;
  });
  return result;
};

const multiply = function (array) {
  if (array.length == 0) {
    return 0;
  } else {
    let result = 1;
    array.forEach(num => {
      result *= num
    })
    return result;
  }
};

const power = function (a, b) {
  return Math.pow(a,b);
};

const factorial = function (a) {
  if (a == 0) {
    return 1
  } else {
    return factorial(a-1)*a;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
