function sumInput() {

  let arr = [];
  let sum = 0;

  do {
    let value = prompt('Введите число', '');
    if (value === '' || value === null || !isFinite(value)) break;
    arr.push(+value);
  } while (true);

  for (let num of arr) {
    sum += num;
  }
  return sum;
}

alert(sumInput());