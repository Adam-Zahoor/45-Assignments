// I was inviting Sultan, Ahad, Sufyan and Adnan

// stating the news of the bigger dinner table

console.log("Alhamdulillah, I've found a bigger dinner table.");

// adding a new guest to the beginning of our array

let guestList: string[] = ["Sultan", "Ahad", "Sufyan", "Adnan"];
console.log("I think I should invite Sameer too");
guestList.unshift("Sameer");
console.log(guestList);

// adding a new guest in the middle of our array
console.log("Let's also call Wahaab to join us");
guestList.splice(guestList.length/2, 0 ,"Wahaab");
console.log(guestList);

// adding a guest to the last of our array
console.log("Hammad should be the last choice")
guestList.push("Hammad");
console.log(guestList);

// Printing a new set of invitations for guests

guestList.forEach(guest => {
    console.log(guest, ", I've arranged a party this weekend and really want you to be a part of it.");
});






