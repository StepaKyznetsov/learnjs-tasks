function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
	let num = i;
	let shooter = function() {
      alert(num);
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[5]();