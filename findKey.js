const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

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

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

const result = findKey(obj, x => x.stars === 2); // ==> "noma"

console.log(result);

assertEqual(result, "noma");