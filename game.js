'use strict';
class Vector {
  constructor(x = 0, y = 0) {
  this.x = x;
  this.y = y;
  }

  plus(x2, y2) {
    let oldVector = this;
    let newVector = new Vector(x2, y2);
    newVector.x = newVector.x + oldVector.x;
    newVector.y = newVector.y + oldVector.y;
    return newVector;
  }
  times(n) {
    let newVector = new Vector(this.x, this.y);
    newVector.x = this.x * n;
    newVector.y = this.y * n;
    return newVector;
  }
}

class Actor {

}

class Level {

}

const grid = [
  new Array(3),
  ['wall', 'wall', 'lava']
];
const level = new Level(grid);
runLevel(level, DOMDisplay);
