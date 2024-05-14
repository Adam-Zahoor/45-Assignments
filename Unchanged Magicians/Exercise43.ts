let nameMagicians: string[] = ["Harry Houdini","David Copperfield","David Devant","Paul Daniels"];

function myArray(arr: string[]){
    return[...arr];
};

function makeGreat(magicianArray: any) {
    for(let i = 0; i<magicianArray.length; i++){
        magicianArray[i] = magicianArray[i] + " the great";
    };
};

function show_magicians(nameMagicians: string[]) {
    nameMagicians.forEach(magician => {
        console.log(magician);
    });
};

const copiedArray = myArray(nameMagicians);



makeGreat(copiedArray);

console.log("\n\nThis is the original Array")
show_magicians(nameMagicians);

console.log("\n\nThis is the modified Array")
show_magicians(copiedArray);






