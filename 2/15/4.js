let x = prompt("Введите число x", '');
let n = prompt("Введите степень n", '');
  
function pow(x, n) {
	let multiply = x;
	for (let i = 1; i < n; i++) {
		multiply *= x;
	}
	return multiply;
}

(n < 1) ? alert(`Степень должна быть натуральном числом`) : alert(pow(x,n));