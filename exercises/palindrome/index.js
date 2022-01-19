// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split("").reverse().join("") === str;
}

// function palindrome(str) {
//   const arr = str.split("");
//   const end = Math.floor(arr.length / 2);

//   const len = arr.length;

//   for (let i = 0; i <= end; i++) {
//     if (arr[i] !== arr[len - i - 1]) return false;
//   }
//   return true;
// }

palindrome("pennep");

module.exports = palindrome;
