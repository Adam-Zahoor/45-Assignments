let nameMagicians: string[] = ["Harry Houdini","David Copperfield","David Devant","Paul Daniels"];

function makeGreat(magicianArray: any) {
    for(let i = 0; i<magicianArray.length; i++){
        nameMagicians[i] = magicianArray[i] + " the great";
    };
};

function show_magicians(nameMagicians: string[]) {
    nameMagicians.forEach(magician => {
        console.log(magician);
    });
};

makeGreat(nameMagicians);
show_magicians(nameMagicians);
