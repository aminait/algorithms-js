// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// function fizzBuzz(n) {
//   let print = "";
//   console.log("fizzBuzz -> print", print);
//   if (n % 3 === 0) {
//     print = "fizz";
//   }
//   console.log("fizzBuzz -> print", print);

//   if (n % 5 === 0) {
//     print = `${print}buzz`;
//   }
//   console.log("fizzBuzz -> print", print);

//   if (n % 5 || n % 3) {
//     print = n;
//   }
//   console.log("fizzBuzz -> print", print);

//   return print;
// }

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let print = "";
    if (i % 3 === 0 && i % 5 === 0) {
      print = "fizzbuzz";
    } else if (i % 5 === 0) {
      print = "buzz";
    } else if (i % 3 === 0) {
      print = "fizz";
    } else {
      print = i;
    }
    console.log(print);
  }
}

fizzBuzz(15);
module.exports = fizzBuzz;
