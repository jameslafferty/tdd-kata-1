function add (str, sum) {
	if ('string' === typeof str) {
		if ('' === str) {
			return 0;
		} else {
			str = str.replace("\n", ',');
			str = str.split(',');
		}
		sum = 0;
	}
	if (0 < str.length) {
		sum += parseInt(str.pop(), 10);
		return add(str, sum);
	}
	return sum;
}