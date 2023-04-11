const findKey = function(object, callback) {
  let result = "";
  for (let key in object) {
    if (callback(object[key])) {
      result = key;
      return result;
    }
  }
  return undefined;
};

module.exports = findKey;