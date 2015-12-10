function Animal(name) {
  this.name = name; // публичное свойство
  var canWalk = true; // приватное свойство
  this._changeColor = false; // защишённое свойство
  this.sayHi = function () { // публичный метод
    var text = "мое имя"; // приватное свойство публичного метода .sayHi
    alert(text + this.name);
  };
}
var animal = new Animal("ёжик");
console.dir(animal);