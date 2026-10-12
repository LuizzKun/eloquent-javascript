let isEven = (value) => {
  if ( value === 0) {
    return true
  }

  if (value === 1 ) {
    return false;
  }

  return isEven(value - 2)
}

console.log(isEven(2));