function emptyString () {
	return expect(add('')).toBe(0);
}
function singleNumber () {
	return expect(add('1')).toBe(1);
}
function twoNumbers () {
	return expect(add('1,2')).toBe(3);
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function arbitraryCountOfNumbers () {
	var length, sum;
	length = getRandomInt(0, 1000);
	for (list = [], sum = 0; list.length < length; list.push(getRandomInt(0, 1000)), sum += list[list.length - 1]);
	return expect(add(list.join(','))).toBe(sum);
}
function newLineDelimiter () {
	return expect(add("1,2\n3")).toBe(6);
}
function adder () {
	it(' will return 0 for an empty string ', emptyString);
	it(' will return the number for a single number ', singleNumber);
	it(' will return the sum of the numbers for two numbers ', twoNumbers);
	it(' will return the sum of the numbers for an arbitrary count of numbers ', arbitraryCountOfNumbers);
	it(' will accept newlines as well as commas as a delimiter ', newLineDelimiter);
}
describe('tdd kata 1', adder);