function f(x) {
  alert(x);
}

function delay(func, time) {
  return function() {
    setTimeout(() => func.apply(this, arguments), time);
  };

}

let f1000 = delay(f, 1000);

f1000("test"); 
