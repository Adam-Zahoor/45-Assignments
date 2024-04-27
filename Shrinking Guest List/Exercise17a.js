"use strict";
// I was inviting Sameer Sultan Wahaab Mohib Ahad Adnan Hammad for the dinner
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Unfortunately, new dinner table won't arrive in time for the dinner so I will only be able to invite two guests.");
var guestList = ["Sultan", "Wahaab", "Mohib", "Ahad", "Adnan", "Hammad"];
// Removing guests from the list until two guests remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log("Sorry ".concat(removedGuest, ", we will not be able to invite you for dinner"));
    }
}
;
// Messaging the guests that are still invited
guestList.forEach(function (guest) {
    console.log(guest, "You're still invited for dinner.");
});
//Emptying the guest list
guestList.splice(0, guestList.length);
console.log("THe people invited for dinner:", guestList);
