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
	let item = list;
	while(item) {
		alert(item.value);
		item = item.next;
	}
}
//2
function printList(list) {
	alert(list.value);
	if (list.next) printList(list.next);
}