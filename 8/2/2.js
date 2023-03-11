//получится
function F(a){
	this.a = a;
}

let obj = new F(3);
let obj2 = new obj.constructor(5);

//не получится
function F(a){
	this.a = a;
}

F.prototype = {};

let obj = new F(3);
let obj2 = new obj.constructor(5);