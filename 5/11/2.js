let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getWeekDay(d) {
	let day = ''
	switch (d.getDay()) {
		case 0: 
			day = 'ВС'
			break
		case 1: 
			day = 'ПН'
			break
		case 2: 
			day = 'ВТ'
			break
		case 3: 
			day = 'СР'
			break
		case 4: 
			day = 'ЧТ'
			break
		case 5: 
			day = 'ПТ'
			break
		case 6: 
			day = 'СБ'
			break
	}
	return day;
}

alert(getWeekDay(date));