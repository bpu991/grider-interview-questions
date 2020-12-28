// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//Clarifying Questions:
    // - will I always recieve a string input?
    // - will the string only contain characters of the alphabet or will there
    //  be numbers too?

// Sample I/Os:
    // - 'what's up you dirty dog' -> 'What's Up You Dirty Dog'
    // - 'will i ever get a job?' -> 'Will I Ever Get A Job?'

//Approach:
    // split the string into an array at ' '
    // iterate through each element of the array and capitalize the first letter
    // join into new empty string

//Pseudo:
    // use .split(' ') to split the string into an array at each space
    // use a for loop to loop through each element of the array
    // at each index of the array, capitalize first element
    // .join the array into a new string
function capitalize(str) {
    let array = str.split(' ');
    let newSentence = [];
    for (let i = 0; i < array.length; i++) {
        newSentence.push(array[i][0].toUpperCase() + array[i].slice(1));
    }
    return newSentence.join(' ')
}

console.log(capitalize('hello what is up?'))
module.exports = capitalize;
