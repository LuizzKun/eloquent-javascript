// car and cat

pattern1 = new RegExp("(car)|(cat)") // can be written as /(car)|(cat)/
console.log(pattern1.test("cat"))

//pop and prop

pattern2 = new RegExp("(pop)|(prop)")
console.log(pattern2.test("prop"));

// Ferret, ferry, and ferrari

pattern3 = new RegExp(/ferr(et|y|ari)/)
console.log(pattern3.test("ferrari"));

pattern4 = new RegExp(/\w+ious\b/)

console.log(pattern4.test("devious"));

// A whitespace character followd by a period, comm,
//colon or semicolon

pattern5 = new RegExp(/\s[.,:;]/)

console.log(pattern5.test("hello ."));

// a word longer than six characters

pattern6 = new RegExp(/\b\w{7,}\b/)

console.log(pattern6.test("Luis"));

// A word without the letter e (or E)

pattern7 = new RegExp(/\b[^eE\s]+\b/)

console.log(pattern7.test("hi"));

