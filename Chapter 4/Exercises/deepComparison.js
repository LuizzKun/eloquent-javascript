// We want to make sure that two items are exactly the same 
// Ex. string a = "cat" string b = "cat"
//These are the same since they are both strings and same word
// == lose equality === strict equality
// == checks if value is same not type
// === checks if both are same
// With objects it compares identity which is same memery not same values


function deepEqual(a, b) {
  // Step 1: If they're exactly equal, return true
  if (a === b) {
    return true;
  }

  // Step 2: If either value is null or not an object,
  // they aren't equal
  if (
    a === null ||
    b === null ||
    typeof a !== "object" ||
    typeof b !== "object"
  ) {
    return false;
  }

  // Step 3: Get the property names of both objects
  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  // Step 4: If they have different numbers of properties,
  // they aren't equal
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Step 5: Check each property
  for (let key of keysA) {
    // If b doesn't have the property, return false
    // Or if the property values aren't deeply equal, return false
    if (
      !Object.hasOwn(b, key) ||
      !deepEqual(a[key], b[key])
    ) {
      return false;
    }
  }

  // Step 6: If every check passed, they're equal
  return true;
}

let a = { name: "Luis" };
let b = { name: "Luis" };

console.log(deepEqual(a,b));

