'use strict';

function add (seq, sum) {
	if ('' === seq) {
		return 0;
	}
	seq = 'string' === typeof seq ? seq.replace("\n", ',').split(',') : seq;
	sum = undefined === sum ? 0 : sum;
	if (0 < seq.length) {
		sum += parseInt(seq.pop(), 10);
		return add(seq, sum);
	}
	return sum;
}