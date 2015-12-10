function Animal(name) {
  this.name = name; // публичное свойство
  this._canWalk = true; // защишённое свойство
};

Animal.prototype.sayHi = function () {
    var text = "мое имя"; // приватное свойство
    alert(text + this.name);
};
var animal = new Animal("Ёжик");
console.dir(animal)