function sum(a) {
  let currentSum = a;

  function func(b) {
    currentSum += b;
    return func;
  }

  func.toString = function() {
    return currentSum;
  };

  return func;
}

alert(sum(0)(1)(2)(3)(4)(5));