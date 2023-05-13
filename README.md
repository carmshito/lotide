# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cshito/lotide`

**Require it:**

`const _ = require('@cshito/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(...)`: asserts that two values are equal
* `assertArraysEqual(...)`: asserts that two arrays are equal
* `assertObjectsEqual(...)`: asserts that two objects are equal
* `eqArrays(...)`: compares if two arrays are equal
* `eqObjects(...)`: compares if two objects are equal
* `head(...)`: returns the first element of an array
* `map(...)`: creates a new array populated with the results of calling a function on every element of the array
* `tail(...)`: returns the every element of an array except for the first element
* `middle(...)`: returns the middle element of an array
* `findKey(...)`: scans the object and returns the first key for which the callback function returns a truthy value
* `findKeyByValue(...)`: scans the object and returns the first key which contains the given value
* `countOnly(...)`: function that takes items and returns counts for a specific subset of those items 
* `countLetters(...)`: function that returns counts of each letter of a string
* `letterPositions(...)`: function that returns all the indices in the strings where each character is found
* `without(...)`: removes elements from an array
* `takeUntil(...)`: returns a slice of the array from the original array until the callback provide returns a truthy value
* `flatten(...)`: function that takes an array containing elements including nested arrays of elements and returns a flattened version of the array


