function Calculator() {
	
  this.calculate = function(str) {
    let elems = str.split(' '),
    a = Number(elems[0])
    sign = elems[1]
    b = Number(elems[2])
	
    if (!sign || isNaN(a) || isNaN(b)) return NaN;
    return this.methods[sign](a, b);
  }
  
  this.addMethod = function(name, func) {
	  this.methods[name] = func;
  }
  
  this.methods = {
	  '+': (a, b) => a + b,
	  '-': (a, b) => a - b,
  }
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result );