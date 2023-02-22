let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
	return arr.filter(elem => 
		(a <= elem && elem <= b)
	);
}

let filtered = filterRange(arr, 1, 4);

alert( filtered );

alert( arr );