var animal = {
     canWalk: true
 	};


var rabbit = {
	 canJump: true
	};

rabbit.__proto__ = animal;

console.dir(rabbit);