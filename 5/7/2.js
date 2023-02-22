let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
	let map = new Map();
	for (let i=0; i < arr.length; i++) {
		let sort = arr[i].toLowerCase().split("").sort().join("");
		map.set(sort, arr[i]);
	}
	return Array.from(map.values());
}

alert(aclean(array));