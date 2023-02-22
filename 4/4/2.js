let calculator = {
	read() {
		this.a = Number(prompt('Введите первое число', ''));
		this.b = Number(prompt('Введите второе число', ''));
	},
	sum() {
		return (this.a + this.b);
	},
	mul() {
		return (this.a * this.b);
	}
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());