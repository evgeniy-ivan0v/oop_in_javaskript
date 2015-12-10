function Animal(name) {
  this.name = name; // публичное свойство
  this._canWalk = true; // защишённое свойство
  this._changeColor = false; // защишённое свойство
  this.sayHi = function () {
    var text = "мое имя "; // приватное свойство
    console.log(text + this.name);
  };
};

function Rabbit(name) {
  Animal.call(this, name);
  this._canJump = true;
  this._changeColor = true; // переопределенное свойство
};

var rabbit = new Rabbit("кролик");
console.log("свойство name класса Animal "+rabbit.name);
rabbit.sayHi();
console.log("свойство _canJump класса Rabbit "+rabbit._canJump);
console.log("переопределенное свойство _changeColor "+rabbit._changeColor);