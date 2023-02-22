let arr = [1, 2, 3];

function shuffle(array) {
	
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}	
	
	return array;
}

alert(shuffle(arr));
