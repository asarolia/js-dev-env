"use strict";

console.log("NPM script initiated : Pre-processing");

var temp = function () {
  return "Arrow function output after babel transpilation";
}();

console.log(temp);