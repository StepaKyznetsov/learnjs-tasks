let emptyObject = {};

function isEmpty(obj) {
	if (!Object.keys(obj).length)
		return true;
	else 
		return false;
}

isEmpty(emptyObject);