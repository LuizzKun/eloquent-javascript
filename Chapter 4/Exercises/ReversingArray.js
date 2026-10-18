function reverseArray (array) {
  let newArray = [];
  let arrayLength = array.length
  while(arrayLength > 0) {
    newArray.push(array.pop())
    arrayLength--;
  }
  return newArray
}

function reverseArrayInPlace (array) {
  for(let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i ] = temp
  }
}
let array = [1,2,3,4,5]
reverseArrayInPlace(array)

console.log(array);


