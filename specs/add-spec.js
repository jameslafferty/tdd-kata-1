'use strict';
function randomInteger (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function addEmptyString () {
	return expect(add('')).toBe(0);
}
function addOneNumber () {
 	return expect(add('1')).toBe(1);
}
function addTwoNumbers () {
	return expect(add('1,2')).toBe(3);
}
function addArbitraryCountOfNumbers () {
	var arr, sum, length;
	arr = [];
	length = randomInteger(1, 1000);
	sum = 0;
	for (true; arr.length < length; arr.push(randomInteger(0, 1000)), sum += arr[arr.length - 1]);
	expect(add(arr.join(','))).toBe(sum);
}
function addNewlineSeparatedNumbers () {
	expect(add("1\n2,3")).toBe(6);
}
function addNumbersWithDifferentDelimiter () {
	
}

function addSpec () {
	it(" will return 0 for an empty string", addEmptyString);
	it(" will return the number for one number", addOneNumber);
	it(" will return the sum of the numbers for two comma separated numbers", addTwoNumbers);
	it(" will return the sum of an arbitrarily long string of comma separated numbers", addArbitraryCountOfNumbers);
	it(" will return the sum of a string of comma or newline separated numbers", addNewlineSeparatedNumbers);
}

describe("add", addSpec);