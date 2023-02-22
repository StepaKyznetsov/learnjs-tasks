function formatDate(date) {
	
	let minutes = date.getMinutes();
	let hours = date.getHours();
	let dayOfMonth = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	
	let diffMs = new Date() - date;
	let diffSecs = Math.round(diffMs / 1000);
	let diffMins = diffSecs / 60;
	let diffHours = diffMins / 60;

	minutes = minutes < 10 ? '0' + minutes : minutes;
	hours = hours < 10 ? '0' + hours : hours;
	dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
	month = month < 10 ? '0' + month : month;
	year = year.toString().slice(-2);
	
	if (diffSecs < 1) return 'прямо сейчас';
	else if (diffMins < 1) return (diffSecs + ' сек. назад')
	else if (diffHours < 1) return (diffMins + ' мин. назад')
	else return (dayOfMonth + '.' + month + '.' + year + ' ' + hours + ':' + minutes)
}

alert(formatDate(new Date(new Date - 1)));
alert(formatDate(new Date(new Date - 30 * 1000)));
alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date - 86400 * 1000)));