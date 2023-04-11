const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // => pass
assertArraysEqual([1, 2, 4, 4], [1, 2, 3, 4]); // => fail
assertArraysEqual(["1", "2", "3", "4"], ["1", "2", "3", "4"]); // => pass
