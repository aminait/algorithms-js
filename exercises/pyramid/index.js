// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # ' 0 1 0  i=0 n=2
//       '###' 1 1 1  i=1 n=2
//   pyramid(3)
//       '  #  '0 0 1 0 0 i=0 n=3 -- n = 2, i=1 "nn#nn" i=3
//       ' ### '0 1 1 1 0 i=1 n=3 -- n = 1, i=3 "n###n" i=5
//       '#####'1 1 1 1 1 i=2 n=3 -- n = 0, i=5 "#####" i=7

function pyramid(n, i = 1) {
  if (n <= 0) {
    return;
  }
  n = n - 1;
  const string = " ".repeat(n).concat("#".repeat(i)).concat(" ".repeat(n));

  console.log(string);

  pyramid(n, i + 2);
}

pyramid(2);

// console.log("0", " ".repeat(0));

module.exports = pyramid;
