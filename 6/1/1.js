//1
function sumTo(n) {
	let sum = 0;
	while (n >= 1) {
		sum +=n;
		n -= 1;
	}
	return sum;
}
//2
function sumTo(n) {
	if (n === 1) return 1;
	return n + sumTo(n - 1);
}
//3
function sumTo(n) {
	return (n * (n + 1)) / 2;
}
