function readNumber() {
	
	let a;

	while (!isFinite(a)) {
		a = +prompt('Введите число', '');
	}

	if (a === null || a === '') 
		return null;

	return +a;
}

alert(readNumber());