let text = "'Hello,' she said. 'How are's you?'";

let result = text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2');

console.log(result);