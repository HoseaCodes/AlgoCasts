// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '')
}

module.exports = reverse;

// Solution #1
// function reverse(str) {
//     let arr = str.split('')
//     arr = arr.reverse()
//     return arr.join('')
    // or
    //str.split('').reverse().str.join('') 1 Line

// }

//Solution #2
// function reverse(str) {
//     let reversed = ''

//     for (let char of str) {
//         reversed = char + reversed
//     }

//     return reversed
// }
