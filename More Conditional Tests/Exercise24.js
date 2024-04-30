//checking whether strings are equal or not
var aName = "Adam";
console.log("Is name == 'Mobeen'? | I predict False");
console.log(aName == "Mobeen");
var bName = "Daniyaal";
console.log("Is bName != 'Zain' | I predict True");
console.log(bName != "Zain");
//tests using lowercase function
var myName = "ADAN";
console.log("Is myName == 'adam' | I predict False");
console.log(myName == "adam");
console.log("Is myName != 'adam' | I predict True");
console.log(myName != 'ADAM');
// Nnmerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var a = 10;
var b = 14;
console.log("Is a equal to 12? | I predict False");
console.log(a == 12);
console.log("Is b not equal to 44? | I predict True");
console.log(a != 44);
var c = 78;
var d = 83;
console.log("Is c less than d? | I predict True");
console.log(c < d);
console.log("Is c greater than d | I predict False");
console.log(c > d);
var p = 26;
var q = 57;
console.log("Is p greater than or equal to 26? | I predict True");
console.log(p >= 26);
console.log("Is q less than or equal to 50? | I predict False");
console.log(q <= 50);
// tests using "and" and "or" operators
var r = "My name is Adam";
var s = "MY NAME IS ADAM";
var x = "My Name Is Adam";
var y = "my name is adam";
console.log("Is r == s && Is x == y? | I predict False");
console.log(r == s && x == y);
console.log("Is x == 'My Name Is Adam' || Is s == 'My name is Adam? | I predict True");
console.log(x == 'My Name Is Adam' || s == 'My name is Adam');
// test whether an item is in an array test  and whether an item is not in an array
var myArray = [1, 2, 4, 5, 6, 7];
console.log("Is 4 in myArray? | I predict True");
console.log(4 in myArray);
console.log("Is 8 not in myArray? | I predict False");
console.log(8 in myArray);
