function getMaxSubSum(arr) {
	let sum = 0;
	let intermediateSum = 0;
	
	for (let i=0; i < arr.length; i++) {
		intermediateSum += arr[i];
		sum = Math.max(sum, intermediateSum);
		if (intermediateSum < 0)
			intermediateSum = 0;
	}
	return sum;
}

getMaxSubSum([-1, 2, 3, -9]);
