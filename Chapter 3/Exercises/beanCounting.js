let countBs = (word) => {
  let wordPosition = 0;
  let counter = 0;
  while(wordPosition < word.length) {
    if(word[wordPosition] === "B") {
      counter++;
    }
    wordPosition++
  }
  return counter
}

console.log(countBs("BOB"));

let countChar = (word,letter) => {
  let wordPosition = 0;
  let counter = 0;

  while(wordPosition < word.length) {
    if(letter === word[wordPosition]) {
      counter++
    }
    wordPosition++
  }
  return counter
}

console.log(countChar("Tamanna", 'a'));