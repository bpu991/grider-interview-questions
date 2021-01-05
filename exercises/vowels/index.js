// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Approach:
    // Write for loop to iterate through the input string and determine if each
    // character is a vowel

// Pseudo:
    // define a vowels var that contains a string of 'aeiou'
    // define counter var to keep track of vowels
    // initiate for loop to loop through the input
    // if the character is a vowel, increment the counter by 1
    // return counter var
function vowels(str) {
    let vowel = 'aeiou';
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i].toLowerCase())) {
            count++
        }
    }
    return count
}

console.log(vowels('Hi There!'))//-- > 3
console.log(vowels('Why do you ask?'))//-- > 4
console.log(vowels('Why?'))//-- > 0
module.exports = vowels;
