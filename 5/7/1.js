function unique(arr) {
	let newArr = new Set();
	for (let i=0; i< arr.length; i++) {
		newArr.add(arr[i])
	}
	return Array.from(newArr)
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values));