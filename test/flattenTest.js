const flatten = require("../flatten");
const assert = require("chai").assert;


console.log(flatten([1, 2, [3, 4], 5, [6], [7, 8, 9]])); // => [1, 2, 3, 4, 5, 6]