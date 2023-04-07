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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let array1 = Object.keys(object1); //  array of keys
  let array2 = Object.keys(object2); //  array of keys
  if (array1.length !== array2.length) {
    return false;
  } 
  for (let key of array1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//TEST CODE

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject,); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false

const alsoLongSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(longSleeveShirtObject, alsoLongSleeveShirtObject); // => true

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
assertEqual(eqObjects(longSleeveShirtObject, alsoLongSleeveShirtObject), true);

// -----------------arrays as values---------------
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false

console.log("result: ", eqArrays(multiColorShirtObject["colors"], anotherMultiColorShirtObject["colors"]));