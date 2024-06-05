// storing names of some famous magicians in an array
var namesOfMagicians = ["Harry Houdini", "David Copperfield", "David Devant", "Paul Daniels"];
// creating a function which will print the names of all the magicians stored in the array
function show_magicians() {
    namesOfMagicians.forEach(function (magician) {
        console.log(magician);
    });
}
;
show_magicians();
