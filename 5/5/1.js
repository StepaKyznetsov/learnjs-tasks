function camelize(str) {
	return str.split('-')
			  .map((elem, index) => 
				 index !== 0 ? elem[0].toUpperCase() + elem.slice(1) : elem
		      ).join('');
}

camelize("background-color");
