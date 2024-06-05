// using the array of the magicians that we created in Exercise 41
let nameOfMagicians: string[] = ["Harry Houdini","David Copperfield","David Devant","Paul Daniels"];

// making the copy of 'nameOfMagicians' array
function copyOfArray(arr: string[]) {
    return [...arr];
}

// creating a function that will add "the Great" to the name of the magicians
function makeGreat(magicianArray: string[]) {
    for(let i = 0; i < magicianArray.length; i++){
        magicianArray[i] = magicianArray[i] + " the Great";
    };
};

// using the show_magicians function to print the array of the magicians
function show_magicians(nameMagicians: string[]) {
    nameMagicians.forEach(magician => {
        console.log(magician);
    });
};

let copyOfMagicianArray: string[] = copyOfArray(nameOfMagicians);

makeGreat(copyOfMagicianArray);

console.log("The original Array: ")
show_magicians(nameOfMagicians);

console.log("\n The modified Array: ")
show_magicians(copyOfMagicianArray);





