function ucFirst(str) {
	let newStr = str[0].toUpperCase();
	return newStr + str.slice(1);
}

alert(ucFirst('вася'))