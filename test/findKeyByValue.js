const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

describe("#findKeyByValue", () => {
  
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("returns sci_fi for 'The Expanse'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });

  it("returns undefined for 'The Last of Us'", () => {
    assert.strictEqual((findKeyByValue(bestTVShowsByGenre, "The Last of Us"), undefined));
  });

});