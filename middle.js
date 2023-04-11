const middle = function(arr) {
  let middleElem = [];
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    middleElem = [arr[Math.floor((arr.length - 1) / 2)], Math.floor((arr.length + 2) / 2)];
  } else {
    middleElem = [arr[Math.floor((arr.length) / 2)]];
  }
  return middleElem;
};

module.exports = middle;