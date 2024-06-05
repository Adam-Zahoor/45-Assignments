import { pseudoRandomBytes } from "crypto";

// storing the person name in a string
let personName: string = "Jason hendricks";

// using the in-built function to change the person name into lowercase
let lowerCase: string = personName.toLowerCase();

// using the in-built function to change the person name into uppercase
let upperCase: string = personName.toUpperCase();

// changing the text of person name to titlecase
let titleCase: string = personName.replace(/\b\w/g,(char) => char.toUpperCase());

let titleCase2: string= personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();

console.log("Lowercase: ", lowerCase);
console.log("Uppercase: ", upperCase);
console.log("Titlecase: ", titleCase);

