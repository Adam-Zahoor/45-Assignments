var locations = ["Japan", "Italy", "Hong Kong", "UAE", "Brazil"];
// printing in original order
console.log("In original order: ", locations);
// arranging the list items in alphabetical order without modifying the original list
console.log("In alphabetical order: ", locations.slice().sort());
// printing in original order again
console.log("In original order: ", locations);
// printing the list in reverse alphabetical order
console.log("In reverse alphabetical order: ", locations.slice().sort().reverse());
// printing the array again
console.log(locations);
// reversing the order of our original array
console.log("Changed to reverse order: ", locations.reverse());
// changing back to original order
console.log("Changed back to original order: ", locations.sort());
// changing to reverse alphabetical order
console.log("In reverse alphabetical order: ", locations.reverse());
