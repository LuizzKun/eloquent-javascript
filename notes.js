let animalCount = /\d+ (pig|cow|chicken)s?/


console.log(animalCount.test("15 pigs"));

console.log(("15 pigs").match(animalCount));