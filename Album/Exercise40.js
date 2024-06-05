// making a function which will store the name of the artist, name of the album and number of tracks. In the end it will return these three pieces of information
function make_album(artistName, title, tracks) {
    return { artistName: artistName, title: title, tracks: tracks };
}
;
// storing the information of some albums in the created function
var album1 = make_album("Drake", "Take Care");
console.log(album1);
var album2 = make_album("Drake", "Scorpion", 10);
console.log(album2);
var album3 = make_album("Drake", "Thank Me Later", 14);
console.log(album3);
