// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const unique = {};

//   const arrA = stringA.toLowerCase().replace(/[^\w]/g, "").split("");

//   const arrB = stringB.toLowerCase().replace(/[^\w]/g, "").split("");

//   for (let char of arrA) {
//     unique[char] = Object.keys(unique).includes(char) ? unique[char] + 1 : 1;
//   }

//   for (let char of arrB) {
//     unique[char] = Object.keys(unique).includes(char) ? unique[char] + 1 : 1;
//   }

//   return Object.values(unique).every((val) => val % 2 === 0);
// }

function anagrams(stringA, stringB) {
  const unique = {};

  const arrA = stringA
    .toLowerCase()
    .replace(/[^\w]/g, "")
    .split("")
    .sort()
    .join("");

  const arrB = stringB
    .toLowerCase()
    .replace(/[^\w]/g, "")
    .split("")
    .sort()
    .join("");

  return arrA === arrB;
}

// anagrams("Hi there", "Bye there");
anagrams("rail safety!!", "fairy tales");
module.exports = anagrams;
