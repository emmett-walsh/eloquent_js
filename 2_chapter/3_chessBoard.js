"use strict";

function chessBoard() {
  var gridSize = 10;
  var result = "";
  for (var counter = 0; counter < gridSize; counter ++) {
    if (counter % 2 == 0) {
      result += buildEvenLine();
    } else {
      result += buildOddLine();
    }
    result += "\n";
  }
  return result;

  function buildEvenLine() {
    var line = "";
    for (var counter = 0; counter < gridSize; counter ++) {
      if (counter % 2 == 0) {
        line += "#";
      } else {
        line += " ";
      }
    }
    return line;
  }

  function buildOddLine() {
    var line = "";
    for (var counter = 0; counter < gridSize; counter ++) {
      if (counter % 2 == 0) {
        line += " ";
      } else {
        line += "#";
      }
    }
    return line;
  }
}
