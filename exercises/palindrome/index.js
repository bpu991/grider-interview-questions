// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//clarifying questions:
    //1) can i assume that i will always get a string or
    // could i also get an array of strings
    //2) will the string only contain letters, or could it also contain
    // numbers/ punctuation etc
    //3) will the string always have an even number of characters?

//approaches:
    //1) split the string in half, if the reversed second half === first
    // half, return true

//pseudocode 1:
    //1) determine if the string has an even amount of characters in it
    //2) if it does:
        // -split the string in half
        // -reverse the second string
        // -if str1 and str2 are equal, return true
    //2) if it doesnt:
        // -str1 === the string before the middle character
        // -str2 === string after the middle character
        // reverse str2
        // -if str1 and str2 are equal, return true

function palindrome(str) {
    //1) determine if the string has an even amount of characters in it

    //2) if it does:
    if (str.length % 2 === 0) {
         // -split the string in half
        let middle = str.length / 2
        let str1 = str.slice(0, middle)
        let str2 = str.slice(middle)

        // -reverse the second string
        let reversedArr = str2.split('').reverse()

        // -if str1 and str2 are equal, return true
        if (str1 === reversedArr.join('')) {
            return true
        }  
        return false
    }

    //2) if it doesnt:
    else {

        let middle = str.length / 2

        // -str1 === the string before the middle character
        let str1 = str.slice(0, middle)

        // -str2 === string after the middle character
        let str2 = str.slice(middle+1)

         // reverse str2
        let reversedArr = str2.split('').reverse();

        // -if str1 and str2 are equal, return true
        if (str1 === reversedArr.join('')) {
            return true
        }
        return false
    }
}

//pseudocode 2:
    //1) reverse entire string
    //2) if the reversed string === original string, return true
    
function palindrome(str) {
    //1) reverse entire string
    const reversed = str.split('').reverse().join('')

    //2) if the reversed string === original string, return true
    return reversed === str
}

console.log(palindrome('poop'))
module.exports = palindrome;
