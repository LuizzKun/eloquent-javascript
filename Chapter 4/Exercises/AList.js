function prepend (value, list) {
  return {
    value: value,
    rest : list
  };
}

function arrayToList (array) {
  let list = null

  for(let i = array.length - 1; i >= 0; i--) {
    list = prepend(array[i],list)
  }
  return list
}

console.log(arrayToList([1,2,3]));

function listToArray(list){
  let array = [];
  while(list != null) {
    array.push(list.value);
    list = list.rest
  }
  return array
}

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}

console.log(listToArray(list));