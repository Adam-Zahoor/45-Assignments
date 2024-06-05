"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// storing the person name in a string
var personName = "Jason hendricks";
// using the in-built function to change the person name into lowercase
var lowerCase = personName.toLowerCase();
// using the in-built function to change the person name into uppercase
var upperCase = personName.toUpperCase();
// changing the text of person name to titlecase
var titleCase = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
var titleCase2 = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
console.log("Lowercase: ", lowerCase);
console.log("Uppercase: ", upperCase);
console.log("Titlecase: ", titleCase);
console.log("Titlecase 2: ", titleCase2);
