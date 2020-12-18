// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//approaches:
    // 1) set up newArr var
    // 2) loop through the array by increments of the size input
    // 3) slice the input array and push that to new array
    // 4) return new array

//pseudo:
    // let newArr = []
    // for (let i = 0; i < array.length; i += size)
        // slice the input array (array.slice(i, i+size))
        // push that sub array into the new array
    // return newArr
function chunk(array, size) {
    let newArr = [];
    for(let i = 0; i < array.length; i += size) {
        let subArr = array.slice(i, i+size)
        newArr.push(subArr);
    }
    return newArr;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
module.exports = chunk;
