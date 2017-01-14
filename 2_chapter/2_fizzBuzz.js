"use strict";

function fizzBuzz() {
  for (var counter = 1; counter <= 100; counter ++) {
    if (isDivisibleByFifteen(counter)) {
      console.log("FizzBuzz");
    } else if (isDivisibleByThree(counter)) {
      console.log("Fizz");
    } else if (isDivisibleByFive(counter)) {
      console.log("Buzz");
    } else {
      console.log(counter);
    }
  }

  function isDivisibleByFifteen(number) {
    return number % 15 == 0;
  }

  function isDivisibleByThree(number) {
    return number % 3 == 0;
  }

  function isDivisibleByFive(number) {
    return number % 5 == 0;
  }
}
