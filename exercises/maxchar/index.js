// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


//clarifying questions:
    //1) I will always receive a string to input 
    //2) is there a minimum length of the string
    //3) will there ever be a tie for most used character
    //4) is this case sensitive? Are H and h the same character

//sample I/Os:
    //1) "aaaaasdfg" -> 'a'
    //2) "sdfuhhdsjjsdf777asdfjn77d7777" -> '7'

//approaches: 
    //1) turn the string into an object with each element being a new key. The value
    // is how many times that element appears. 
        // - set a maxCharKey var
        // - set a maxValue var

//Pseudo:
    // 1) let maxKey = ''
    // 2) let maxVal = null
    // 3) let newObj = {}
    // loop through the string with a for of loop
    // loop through the new object and compare the value of each val to the maxVal var

function maxChar(str) {
    let maxKey = '';
    let maxVal = null;
    let newObj = {}

    for (let key of str) {
        if (!newObj[key.toLowerCase()]) {
            newObj[key.toLowerCase()] = 1
        } else {
            newObj[key.toLowerCase()]++
        }
    }

    for(let key in newObj) {
        if(newObj[key] > maxVal) {
            maxVal = newObj[key]
            maxKey = key
        }
    } 
    return maxKey
}

console.log(maxChar('helLo'))
module.exports = maxChar;
