const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", () => {

  it("returns [0] for 'h' in 'hello'", () => {
    assert.deepEqual(letterPositions("hello")["h"], [0]);
  });

  it("returns [2, 3] for 'l' in 'hello'", () => {
    assert.deepEqual(letterPositions("hello")["l"], [2, 3]);
  });

  it("returns [1, 3, 5] for 'a' in 'banana'", () => {
    assert.deepEqual(letterPositions("banana")["a"], [1, 3, 5]);
  });

});