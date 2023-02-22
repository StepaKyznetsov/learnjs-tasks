function Calculator() {
	
  this.read = function() {
    this.a = Number(prompt('Введите первое число', ''));
    this.b = Number(prompt('Введите второе число', ''));
  };
  
  this.sum = function() {
    return this.a + this.b;
  };
  
  this.mul = function() {
    return this.a * this.b;
  };
}


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );