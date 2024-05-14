var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var nameMagicians = ["Harry Houdini", "David Copperfield", "David Devant", "Paul Daniels"];
function myArray(arr) {
    return __spreadArray([], arr, true);
}
;
function makeGreat(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = magicianArray[i] + " the great";
    }
    ;
}
;
function show_magicians(nameMagicians) {
    nameMagicians.forEach(function (magician) {
        console.log(magician);
    });
}
;
var copiedArray = myArray(nameMagicians);
makeGreat(copiedArray);
console.log("\n\nThis is the original Array");
show_magicians(nameMagicians);
console.log("\n\nThis is the modified Array");
show_magicians(copiedArray);
