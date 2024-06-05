// using the array of the magicians that we created in Exercise 41
let nameOfMagicians: string[] = ["Harry Houdini","David Copperfield","David Devant","Paul Daniels"];

// creating a function that will add "the Great" to the name of the magicians
function makeGreat(magicianArray: string[]) {
    for(let i = 0; i < magicianArray.length; i++){
        nameOfMagicians[i] = magicianArray[i] + " the Great";
    };
};

// using the show_magicians function to print the array of the magicians
function show_magicians(nameMagicians: string[]) {
    nameMagicians.forEach(magician => {
        console.log(magician);
    });
};

// calling both the function to see that the array has acutally been modified
makeGreat(nameOfMagicians);
show_magicians(nameOfMagicians);




