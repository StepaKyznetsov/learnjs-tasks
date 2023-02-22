let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(users) {

	return users.reduce((sum, user) =>
		sum + user.age, 0) / users.length;
}

alert(getAverageAge(arr));