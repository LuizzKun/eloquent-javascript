const square = function(x) {
   return x*x
}


function future() {
  console.log("This is the future");
}

console.log(square(12));

future(); 

const roundTo = (n, step) => {
let remainder = n % step;
return n - remainder + (remainder < step / 2 ? 0 : step)
}

const square1 = (x) => { return x * x}
const square2 = x => x*x;