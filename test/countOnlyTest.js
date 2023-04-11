const countOnly = require("../countOnly");
const assert = require("chai").assert;

describe("#countOnly", () => {
  
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  it("returns { Fang: 2, Jason: 1 } for { 'Jason': true, 'Karima': true, 'Fang': true } ", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true }), { "Fang": 2, "Jason": 1 });
  });

  it("returns { Agouhanna: 1 } for { 'Agouhanna': true, 'Salima': false } ", () => {
    assert.deepEqual(countOnly(firstNames, { "Agouhanna": true, "Carm": true, "Salima": false }), { "Agouhanna": 1 });
  });

});