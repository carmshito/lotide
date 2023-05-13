const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

describe("#findKeyByValue", () => {
  
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("returns sciFi for 'The Expanse'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
  });

  it("returns undefined for 'The Last of Us'", () => {
    assert.strictEqual((findKeyByValue(bestTVShowsByGenre, "The Last of Us"), undefined));
  });

});