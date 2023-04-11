const countLetters = require("../countLetters");
const assert = require("chai").assert;

describe("#countLetters", () => {

  it("returns { l: 1, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 1, e: 1 } for 'lighthouse'", () => {
    assert.deepEqual(countLetters("lighthouse"), { l: 1, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 1, e: 1 });
  });

  it("returns { h: 1, e: 1, l: 2, o: 1 } for 'hello'", () => {
    assert.deepEqual(countLetters("hello"), { h: 1, e: 1, l: 2, o: 1 });
  });

});
