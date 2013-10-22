'use strict';
function parseInput (seq) {
	var delimiter, header;
	header = /^\/\/(.)\n/.exec(seq);
	delimiter = null === header ? ',' : header[1];
	header = null === header ? '' : header[0];
	return seq.replace(header, '')
		.replace("\n", delimiter)
			.split(delimiter);
}
function add (seq, sum) {
	var delimiter, header;
	if ('string' === typeof seq) {
		if ('' === seq) {
			return 0;
		}
		seq = parseInput(seq);
	}
	sum = undefined === sum ? 0 : sum;
	if (0 < seq.length) {
		sum += parseInt(seq.pop(), 10);
		return add(seq, sum);
	}
	return sum;
}