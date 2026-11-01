function every(array,predicate) {
  for(let element of array) {
    if(!predicate(element)) {
      return false
    }
    return true
  }
}

function every1(array,predicate) {
  return !array.some(element => !predicate(element))
}

console.log(every([1,2,3,4],n => n>0));
console.log(every1([1,2,3,4], n=> n > 0));