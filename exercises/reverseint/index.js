// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(6347) === 7436
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//clarifying questions:
    //1) will i always get a postive number?
    //2) will i always get an integer data type or could it be a string num?

//approaches:
    //1) turn the input num to a string, reverse the string, turn it back into a number
function reverseInt(n) {
    if (n === 0) {
        return 0
    }
    if(Math.sign(n) === -1) {
        let arrNum = n.toString().split('')
        let nonNeg = arrNum.slice(1)
        nonNeg.reverse()
        
        let i = 0
        while (nonNeg[i] === '0') {
            nonNeg.shift()
        }
        nonNeg.unshift('-');
        let newStr = nonNeg.join('')
        let newNum = parseInt(newStr)
        
        return newNum
    } else {
        let arrNum = n.toString().split('');
        arrNum.reverse()

        let i = 0;
        while(arrNum[i] === '0') {
            arrNum.shift()
        }

        let newStr = arrNum.join('')
        let newNum = parseInt(newStr);
        return newNum;
    }
}

//Better Solution:
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n)
}

// function maxScore(string) {
//     let max = 0;

//     for(let i = 0; i < string.length; i++) {
//         let zeroCount = 0;
//         let oneCount = 0;

//         let str1 = string.slice(0, i)
        
//         let str2 = string.slice(i)
       
//         for (let j = 0; j < str1.length; j++) {
//             if (str1[j] === '0') {
//                 zeroCount++
//             }
//         }
//         for (let j = 0; j < str2.length; j++) {
//             if (str2[j] === '1') {
//                 oneCount++
//             }
//         }
//         let sum = zeroCount + oneCount;
//         if (max < sum) max = sum

//     }
//     return max
// }

// console.log(maxScore('011101'));
// console.log(reverseInt(5050000))
// module.exports = reverseInt;
