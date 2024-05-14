function make_album(artistName: string, title: string, tracks?: number) {
    
    const myAlbum: {artistName:string, title: string, tracks?: number} = {
        artistName: artistName,
        title: title,
    };

    if(tracks !== undefined){
        myAlbum.tracks = tracks;
    };

    return myAlbum
};

const album1 = make_album("Drake","Take Care");
console.log(album1)

const album2 = make_album("Drake","Scorpion");
console.log(album2)

const album3 = make_album("Drake","Thank Me Later", 14);
console.log(album3)



