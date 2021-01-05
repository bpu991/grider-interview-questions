// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########'

// function pyramid(n) {
//     const mid = Math.floor(( 2 * n - 1) / 2)
//     for (let row = 0; row < n; row++) {
//         let level = '';

//         for (let col = 0; col < 2 * n - 1; col++) {
//             if (mid - row <= col && mid + row >= col) {
//                 level += '#'
//             } else {
//                 level += ' '
//             }
//         }
//         console.log(level)
//     }
// }

// console.log(pyramid(5))


// module.exports = pyramid;

// function sumZero(arr) {
//     let nums = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === 0) {
//                 nums.push(arr[i])
//                 nums.push(arr[j])
//                 return nums
//             }
//         }
//     }
// }

// console.log(sumZero([-3,-2,-1,0,1,2,3]))

function countUniqueValues(array) {
    let uniqueVals = [];
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (!uniqueVals.includes(array[i])) {
            uniqueVals.push(array[i])
            count++
        }
    }
    return count;
}

console.log(countUniqueValues([-3, -2, -1, 0, 1, 2, 3, 3, 3]))