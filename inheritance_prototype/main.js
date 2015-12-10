function Animal(name) {
  this.name = name;
  this.speed = 0;
}

Animal.prototype.run = function(speed) {
  this.speed += speed;
  console.log( this.name + 'бежит, скорость' + this.speed );
};

Animal.prototype.stop = function() {
  this.speed = 0;
  console.log( this.name + 'стоит' );
};

function Rabbit(name) {
  Animal.call(this,name);
  this._canJump = true;
}

Rabbit.prototype.jump = function() {
  if(this._canJump){
    this.speed++;
    console.log( this.name + ' прыгает' );
  };
};

var rabbit = new Rabbit('Кроль');

Rabbit.prototype = Object.create(Animal.prototype);
console.dir(rabbit);
