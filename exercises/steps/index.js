// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# ' 1 1
//       '##' 2 0
//   steps(3)
//       '#  ' 1 2
//       '## ' 2 1
//       '###' 3 0
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (i = 1, j = n - 1; i <= n, j >= 0; i++, j--) {
//     console.log("#".repeat(i).concat(" ".repeat(j)));
//   }
// }

// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let step = "";
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         step += "#";
//       } else {
//         step += " ";
//       }
//     }
//     console.log(step);
//   }
// }

function steps(n, row = 0, stair = "") {
  if (row === n) {
    return;
  }

  if (n == stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair && stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}

steps(3);
module.exports = steps;
