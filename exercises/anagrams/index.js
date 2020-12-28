// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//clarifying questions
    // 1) is this case sensitive? no

// approaches:
    //1) make two objects, one for stringA and one for stringB, compare the two 

//pseudo :
    // 1) define two empty objects
    // 2) loop through both strings and make an object with the key = element
        // the value = how many times it occurs
    // 3) compare the two objects
function anagrams(stringA, stringB) {
    let obj1 = {};
    let obj2 = {};
    let count = 0;
    for (let key of stringA) {
        if(!obj1[key.toLowerCase()]) {
            obj1[key.toLowerCase()] = 1
        } else {
            obj1[key.toLowerCase()]++
        }
    }
    for (let key of stringB) {
        if (!obj2[key.toLowerCase()]) {
            obj2[key.toLowerCase()] = 1
        } else {
            obj2[key.toLowerCase()]++
        }
    }
    for (let key1 in obj1) {
        for(let key2 in obj2) {
            if (key1 === key2 && obj1[key1] === obj2[key2]) {
                count++
            }
        }
    }
    return count === Object.keys(obj1).length
    
}

console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))
module.exports = anagrams;
