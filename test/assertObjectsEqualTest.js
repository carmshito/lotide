const assertObjectsEqual = require("../assertObjectsEqual");

assertObjectsEqual({ color: "red", size: "medium" }, { size: "medium", color: "red" });