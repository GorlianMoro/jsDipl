'use strict';
class Vector {
  constructor(x = 0, y = 0) {
  this.x = x;
  this.y = y;
  }

  plus(newVect) {
    if (typeof(newVect) !== 'object')
    {
      throw 'Можно прибавлять к вектору только вектор типа Vector';
    }
    let pointX = this.x;
    let pointY = this.y;
    let newVector = new Vector(pointX + newVect.x, pointY + newVect.y)
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
  constructor (pos = new Vector(0,0), size = new Vector(1,1), speed  = new Vector(0,0)) {
    this.pos = pos;
    /*
    if (pos !== new Vector(0,0)) {
      throw 'Ошибка';
    }*/
    this.size = size;
    this.speed = speed;
    this.type;
    const confType = {
      value : 'actor'
    }
    Object.defineProperty(this, 'type', confType);

    this.left;
    const confLeft = {
      value : pos.x
    }
    Object.defineProperty(this, 'left', confLeft);

    this.top;
    const confTop = {
      value : pos.y
    }
    Object.defineProperty(this, 'top', confTop);

    this.right;
    const confRight = {
      value :  pos.x + size.x
    }
    Object.defineProperty(this, 'right', confRight);

    this.bottom;
    const confBottom = {
      value : pos.y + size.y
    }
    Object.defineProperty(this, 'bottom', confBottom);
  }
  act() {};
  isIntersect(newActor) {
    if (newActor.pos.x || newActor.pos.y >= this.pos.x || this.pos.y) {
      return false;
    } else if (newActor.pos === this.pos && newActor.size < this.size) {
      return true;
    }

    //else if (newActor.pos.x < this.pos.x) {
      //return false;
    //} else if (newActor.pos.x <= this.pos.x && newActor.size.y <= this.size.y) {
      //return true;
    //}
  };
}

class Level {

}

/*const grid = [
  new Array(3),
  ['wall', 'wall', 'lava']
];
const level = new Level(grid);
runLevel(level, DOMDisplay);*/
