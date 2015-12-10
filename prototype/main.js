var animal = { canWalk: true };


function Rabbit () {
 this.canJump = true;
};

Rabbit.prototype = animal;
var rabbit = new Rabbit;

console.dir(rabbit);