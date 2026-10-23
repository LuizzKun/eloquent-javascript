let loop = (value, test, update, body) => {


  while(test(value) === true) {
    body(value)
    value = update(value)
  }
  
}

loop(
  0,
  n => n < 3,
  n => n + 1,
  n => console.log(n)
);

