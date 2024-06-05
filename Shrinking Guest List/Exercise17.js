// I was inviting Sameer, Sultan, Wahaab, Ahad, Sufyan, Adnan, Hammad  for the dinner
//printing that due to some circumstances I won't be able to invite so many people
console.log("Unfortunately, new dinner table won't arrive in time for the dinner so I will only be able to invite two guests.");
// Removing guests from the list until two guests remain
var guestList = ["Sameer", "Sultan", "Wahaab", "Ahad", "Sufyan", "Adnan", "Hammad"];
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log("Sorry ".concat(removedGuest, ", we will not be able to invite you for dinner"));
    }
    ;
}
;
// Messaging the guests that are still invited
guestList.forEach(function (guest) {
    console.log(guest, "You're still invited for dinner.");
});
//Emptying the guest list
guestList.splice(0, guestList.length);
console.log("THe people invited for dinner:", guestList);
