let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
	stomach: [],
  __proto__: hamster
};

let lazy = {
	stomach: [],
  __proto__: hamster
};

speedy.eat("apple");
alert( speedy.stomach );
alert( lazy.stomach );