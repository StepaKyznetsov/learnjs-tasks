function checkSpam(str) {
	let newStr = str.toLowerCase();
	
	if (newStr.includes('viagra') || newStr.includes('xxx'))
		return true;
	else return false;
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");