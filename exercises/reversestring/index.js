// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//clarifying questions:
    // Can i assume I will always get a string, or will i sometimes get an array of strings?
//Approaches:
    //1) set a empty string variable, reverse for loop the str and then return
    // the not so empty string variable at the end
    //2) turn str input to an array, use .reverse on array
//PseudoCode 1:
    //1) set empty string variable
    //2) reverse for loop the input string
    //3) inside the for loop, add each element to the empty string
    //4) return empty string
//PseudoCode 2:
    //1) turn str into an array
    //2) call .reverse() method on said array
    //3) .join() array to turn it back into a string

//solution 1
function reverse(str) {
    //1) set empty string variable
    let reverseString = '';

    //2) reverse for loop the input string
    for (let i = str.length - 1; i >= 0; i--) {

        //3) inside the for loop, add each element to the empty string
        reverseString+= str[i]
    }
    //4) return empty string
    return reverseString;
}


//solution 2
function reverse(str) {
    //1) turn str into an array
    let arr = str.split('')

    //2) call .reverse() method on said array
    let reversed = arr.reverse()

    //3) .join() array to turn it back into a string
    return reversed.join('')
}
console.log(reverse('hello'))
module.exports = reverse;
