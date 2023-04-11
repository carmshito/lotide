const map = require("../map");
const assert = require("chai").assert;

describe("#map", () => {
  
  const words = ["ground", "control", "to", "major", "tom"];
  
  it("returns [ 'g', 'c', 't', 'm', 't' ] for map(words, word => word[0])", () => {
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("returns ['grounday', 'controlay', 'toay', 'majoray', 'tomay'] for map(words, word => word + 'ay)", () => {
    assert.deepEqual(map(words, word => word + "ay"), ["grounday", "controlay", "toay", "majoray", "tomay"]);
  });
  
  it("returns [ 'r', 'o', 'o', 'a', 'o' ] for map(words, word => word[1])", () => {
    assert.deepEqual(map(words, word => word[1]), [ 'r', 'o', 'o', 'a', 'o' ]);
  });

});