const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  let result = "";
  for (let key in object) {
    // console.log(key);
    // console.log(object[key]);
    if (object[key] === value) {
      result = key;
      return result;
    }
  }
  return undefined;
};




// TEST CODE:
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse")); // => sciFi
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show")); // => undefined
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); // => drama


// scan the object
// return the first key that contains the given value
// if no key with the given value is found, it should return undefined
// in = key // of = loop through values