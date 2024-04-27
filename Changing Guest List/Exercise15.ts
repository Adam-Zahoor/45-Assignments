 let guestList: string[] = ["Sultan", "Mohib", "Ahad", "Sufyan"];

 for (let i = 0; i < guestList.length; i++) {
    console.log(guestList[i], ", I just received a promotion at the office. Having a party on the twenty fifth this month. Your presence would be a cause of our happiness.");
 };

//  guest who can't make the dinner

 let absentGuest: any = guestList.splice(1, 1)[0];
 console.log(absentGuest, "can't come to the dinner");

//  replacing the guest
let newGuest: string = "Adnan";
guestList.push(newGuest);
console.log(guestList);

// second set of invitaion messages

guestList.forEach(guest => {
    console.log(guest, ", I just received a promotion at the office. Having a party on the twenty fifth this month. Your presence would be a cause of our happiness.")
});