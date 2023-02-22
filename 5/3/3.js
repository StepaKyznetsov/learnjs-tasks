function truncate(str, maxLength) {
	if (str.length > maxLength)
		return str.slice(0, maxLength - 1) + '...';
	else return str;
}



truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);