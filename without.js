const without = function(array, removeElem) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (!removeElem.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
};

module.exports = without;