const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (!result[letter]) {
        result[letter] = 0;
      }
      result[letter]++;
    }
  }
  return result;
};

module.exports = countLetters;