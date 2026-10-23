let arrays = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

let combinedArray = arrays.reduce((array,currentArray) => {
  return array.concat(currentArray)
}, [])

console.log(combinedArray);