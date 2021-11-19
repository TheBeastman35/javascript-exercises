const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(num) {
  let sumNum = 0;

  if (num.length == 0)
  {
    return 0;
  }

  for (let i = 0; i < num.length; ++i)
  {
    sumNum = sumNum + num[i];
  }

  return sumNum;
};

const multiply = function(num) {
  let multNum = 1;

  if (num.length == 0)
  {
    return 0;
  }

  for (let i = 0; i < num.length; ++i)
  {
    multNum = multNum * num[i];
  }

  return multNum;
};

const power = function(num1, num2) {
  if (num2 == 0)
  {
    return 1;
  }

  let multNum = 1;

  for (let i = 0; i < num2; ++i)
  {
    multNum = multNum * num1;
  }

  return multNum;
};

const factorial = function(num) {
  if (num == 0 || num == 1)
  {
    return 1;
  }

  let retNum = 1;

  for (let i = 1; i <= num; ++i)
  {
    retNum = retNum * i;
  }

  return retNum;
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
