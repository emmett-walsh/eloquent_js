"use strict";

function fizzBuzz() {
  var result_string = ""
  for (var counter = 1; counter <= 21; counter ++) {
    if (isDivisibleByFifteen(counter)) {
      result_string += "FizzBuzz, ";
    } else if (isDivisibleByThree(counter)) {
      result_string += "Fizz, ";
    } else if (isDivisibleByFive(counter)) {
      result_string += "Buzz, ";
    } else {
      result_string += counter;
      result_string += ", ";
    }
  }

  var layer = document.createElement("p");
  var layerValue = document.createTextNode(result_string);

  layer.appendChild(layerValue);
  document.body.appendChild(layer);

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
