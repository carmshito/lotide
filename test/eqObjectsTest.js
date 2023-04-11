const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject= { size: "medium", color: "red" };
  
  it("returns true for { color: 'red', size: 'medium' }, { size: 'medium', color: 'red' }", () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it("returns true for { color: 'red'}, { color: 'red' }", () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

});