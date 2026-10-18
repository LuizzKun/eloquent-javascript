const range = (start, end , step = 1) => {
  let numArray = [];

  if( step > 0) {
    for(let i = start; i <= end; i += step) {
      numArray.push(i)
    }
  } else if (step < 0) {
      for(let i = start; i >= end; i+= step) {
        numArray.push(i)
      }
  }
  return numArray
}

const sum = (numArray) => {
  let sum = 0;
  let x = 0;
  while(x < numArray.length){
    sum += numArray[x]
    x++
  }
  return sum;
}

console.log(sum(range(1,10)));