function getSecondsToTomorrow() {
	let date = new Date();
	let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1)
	return Math.round((tomorrow - date)/1000);
}

getSecondsToTomorrow()