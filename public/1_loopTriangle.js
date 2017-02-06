"use strict";

function loopTriangle() {
  var result = "";
  for (var counter = 0; counter < 7; counter ++) {
    result = result + "#";
    var layer = document.createElement("p");
    var layerValue = document.createTextNode(result);
    layer.appendChild(layerValue);

    document.body.appendChild(layer);

    console.log(result);
  }
}
