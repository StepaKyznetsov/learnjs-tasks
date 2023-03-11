//1
function printNumbers(from, to) {
	let current = from;
	
	let timerId = setInterval(function() {
		alert(current);
		return (current === to) ? clearInterval(timerId) : current++;
	}, 1000)
}
//2
function printNumbers(from, to) {
	let current = from;
	
	setTimeout(function next() {
		alert(current);
		return (current < to) ? setTimeout(next, 1000) : current++;
	}, 1000);
}