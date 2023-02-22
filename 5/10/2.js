let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
	let max = 0;
	let maxName = null;
	
	for(let [key, value] of Object.entries(salaries)) {
		if (max < value) {
			max = value;
			maxName = key;
		}
	}

	return maxName;
}

alert(topSalary(salaries));