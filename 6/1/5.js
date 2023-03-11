let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
//1
function printList(list) {
	let arr = [];
	let item = list;

	while (item) {
		arr.push(item.value);
		item = item.next;
	}
	
	arr.reverse().map((item) => alert(item))
}
//2
function printList(list) {
	if (list.next) printList(list.next);
	alert(list.value);
}