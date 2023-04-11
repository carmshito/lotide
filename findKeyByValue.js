const findKeyByValue = function(object, value) {
  let result = "";
  for (let key in object) {
    if (object[key] === value) {
      result = key;
      return result;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;