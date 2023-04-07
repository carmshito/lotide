const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
    // console.log(letter);
    if (letter !== " ") {
      if (!result[letter]) {
        result[letter] = 0;
      } 
      result[letter]++;
      }
    }
  return result;
};
  

// TEST CODE
assertEqual(countLetters("lighthouse in the house")["h"], 4);
assertEqual(countLetters("lighthouse in the house")["e"], 3);