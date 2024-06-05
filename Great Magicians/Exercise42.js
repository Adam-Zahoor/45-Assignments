var nameMagicians = ["Harry Houdini", "David Copperfield", "David Devant", "Paul Daniels"];
function makeGreat(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        nameMagicians[i] = magicianArray[i] + " the Great";
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
makeGreat(nameMagicians);
show_magicians(nameMagicians);
