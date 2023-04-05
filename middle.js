const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`❌❌❌ Assertion Failed`);
  }
};

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

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]