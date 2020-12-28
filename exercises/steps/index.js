// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//Clarifying Questions:
    // - Function will only recieve positive integers?
    // - will it start with 1 # sign or will it start with 0?

//Approaches:
    // write a for loop that goes up to the input number
    // for every index in the loop, 
function steps(n) {
    
    for (let row = 0; row < n; row++) {
        let stair = ''
        for (let col = 0; col < n; col++) {
            if (col <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair)
    }
    
}

console.log(steps(3))
module.exports = steps;
