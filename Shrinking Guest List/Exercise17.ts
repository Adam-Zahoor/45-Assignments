// I was inviting Sameer Sultan Wahaab Mohib Ahad Adnan Hammad for the dinner

console.log("Unfortunately, new dinner table won't arrive in time for the dinner so I will only be able to invite two guests.");

let guestList: string[] = ["Sultan", "Wahaab", "Mohib", "Ahad", "Adnan", "Hammad"];

// Removing guests from the list until two guests remain

while(guestList.length > 2) {
    let removedGuest: string | undefined = guestList.pop();
    if (removedGuest !== undefined) {
    console.log(`Sorry ${removedGuest}, we will not be able to invite you for dinner`);
  }
};

// Messaging the guests that are still invited

guestList.forEach (guest => {
    console.log(guest, "You're still invited for dinner.");
});

//Emptying the guest list

guestList.splice(0, guestList.length);
console.log("THe people invited for dinner:", guestList);