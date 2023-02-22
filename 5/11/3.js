let date = new Date(2014, 0, 3);

function getLocalDay(d) {
	let day = d.getDay()
	if (day === 0) day = 7
	return day;
}

alert(getLocalDay(date));