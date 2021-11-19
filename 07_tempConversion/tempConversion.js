const ftoc = function(temp) {
  let newTemp = (temp - 32) * (5/9);
  newTemp = Math.round(newTemp * 10) / 10;
  return newTemp;
};

const ctof = function(temp) {
  let newTemp = (temp * (9/5) + 32);
  newTemp = Math.round(newTemp * 10) / 10;
  return newTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
