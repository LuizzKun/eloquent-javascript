// function primativeMultiply(x,y) {
//   return x * y
// }

// function reliableMultiply(x,y) {
//   for(;;){
//     try{
//       return primativeMultiply(x,y)
//     } catch (error) {
//       if(!(error instanceof MultiplicationUnitFailure)) {
//         throw error
//       }
//     }
//   }
// }

class MultiplicationUnitFailure extends Error {}
class TypeError extends Error{}

function primitiveMultiply(x, y) {
  if(Math.random() < 0.2) {
    return x * y
  }

  throw new MultiplicationUnitFailure("Multiplication Failed")
}

function reliableMultiply(x, y) {
  for(;;) {
    try {
      return primitiveMultiply(x, y);
    } catch (error) {
      if(!(error instanceof MultiplicationUnitFailure)) {
        throw error;
      }
    };
  }
}

console.log(reliableMultiply(1,5));