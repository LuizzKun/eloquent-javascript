class vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
   return new vec(this.x + other.x , this.y + other.y)
  }

  minus(other) {
    return new vec(this.x - other.x , this.y - other.y)
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y **2)
  }
}

let vector1 = new vec(2,2)
let vector2 = new vec(3,6)

console.log(vector1.plus(vector2));
console.log(vector1.minus(vector2));

console.log(vector1.length);
console.log(vector2.length);