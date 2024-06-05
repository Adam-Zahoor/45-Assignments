let current_users: string[] = ["User1","User2","User3","User4","User5"];
let new_users: string[] = ["User2","User7","USER5","User9","User10"];

for(let user of new_users) {
    if(current_users.includes(user)) {
        console.log("You need to enter a new username");
} else {
        console.log("This username is available");
    };
};







