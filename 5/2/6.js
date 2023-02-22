function randomInteger (a, b) {
	let range = b - a + 1; 
	return Math.floor(Math.random() * range) + a;
}


alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));