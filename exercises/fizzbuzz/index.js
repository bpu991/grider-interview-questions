// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//clarifying questions:
    //1) will the input always be an integer. any data type conversions?

//approaches:
    // 1) run a for loop until it hits the input, with 4 conditionals

//pseudo:
    // 1) set up a for loop i = 0; i <= n; i++
        // 2) print fizz if divisible by 3
        // 3) print buzz if divisible by 5
        // 4) print fizzbuzz if divisible by both

function fizzBuzz(n) {

    for(let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        }
        else if(i % 3 ===0 ) {
            console.log('fizz');
        } else if (i%5 === 0) {
            console.log('buzz');
        }  else {
            console.log(i);
        }
    }
}

console.log(fizzBuzz(0))
module.exports = fizzBuzz;
