let number = 1;

for(number; number <= 100; number++) {
  if (number % 3 ===  0 && number % 5 === 0) {
    console.log("FizzBuzz"); }
    else if(number % 3 ===  0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  }}