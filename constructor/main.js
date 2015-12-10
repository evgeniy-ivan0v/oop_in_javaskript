function Animal(name) {
  this.name = name;
  this.canWalk = true;
  this.sayHi = function () {
    console.log("мое имя " + this.name);
  };
}
var animal = new Animal("ёжик");

console.dir(animal);