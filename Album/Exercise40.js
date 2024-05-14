function make_album(artistName, title, tracks) {
    var myAlbum = {
        artistName: artistName,
        title: title,
    };
    if (tracks !== undefined) {
        myAlbum.tracks = tracks;
    }
    ;
    return myAlbum;
}
;
var album1 = make_album("Drake", "Take Care");
console.log(album1);
var album2 = make_album("Drake", "Scorpion");
console.log(album2);
var album3 = make_album("Drake", "Thank Me Later", 14);
console.log(album3);
