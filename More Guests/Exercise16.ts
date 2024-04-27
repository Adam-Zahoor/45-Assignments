// stating the news of the bigger dinner table

console.log("Alhamdulillah, I've found a bigger dinner table.");

// Previously Sultan, Mohib, Ahad and Adnan were being invited
// adding a new guest to the beginning of our array

let guestList: string[] = ["Sultan", "Mohib", "Ahad", "Adnan"];
guestList.unshift("Sameer");
console.log(guestList);

// adding a new guest in the middle of our array

guestList.splice(guestList.length/2, 0 ,"Wahaab");
console.log(guestList);

// adding a guest to the last of our array

guestList.push("Hammad");
console.log(guestList);

// Printing a new set of invitations for guests

guestList.forEach(guest => {
    console.log(guest, ", I've arranged a party this weekend and really want you to be a part of it.");
});





