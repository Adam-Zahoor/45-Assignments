var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// using the array of the magicians that we created in Exercise 41
var nameOfMagicians = ["Harry Houdini", "David Copperfield", "David Devant", "Paul Daniels"];
// making the copy of 'nameOfMagicians' array
function copyOfArray(arr) {
    return __spreadArray([], arr, true);
}
// creating a function that will add "the Great" to the name of the magicians
function makeGreat(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = magicianArray[i] + " the Great";
    }
    ;
}
;
// using the show_magicians function to print the array of the magicians
function show_magicians(nameMagicians) {
    nameMagicians.forEach(function (magician) {
        console.log(magician);
    });
}
;
var copyOfMagicianArray = copyOfArray(nameOfMagicians);
makeGreat(copyOfMagicianArray);
console.log("The original Array: ");
show_magicians(nameOfMagicians);
console.log("\n The modified Array: ");
show_magicians(copyOfMagicianArray);
