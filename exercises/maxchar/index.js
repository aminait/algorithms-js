// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Cmplex solution
// function maxChar(str) {
//   const unique = {};
//   const arr = str.split("");
//   for (char of arr) {
//     unique[char] = Object.keys(unique).includes(char) ? unique[char] + 1 : 1;
//   }
//   let max = {};
//   Object.entries(unique).forEach(([k, v]) => {
//     if (v > Object.values(max)) {
//       max = { [k]: v };
//     }
//   });
//   return Object.keys(max).join("");
// }

function maxChar(str) {
  const unique = {};
  const arr = str.split("");
  for (char of arr) {
    unique[char] = Object.keys(unique).includes(char) ? unique[char] + 1 : 1;
  }

  let max = 0;
  let maxChar = "";
  Object.entries(unique).forEach(([k, v]) => {
    if (v > max) {
      max = v;
      maxChar = k;
    }
  });
  return maxChar;
}

maxChar("abcccccccd");
module.exports = maxChar;
