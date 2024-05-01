var current_users = ["User1", "User2", "User3", "User4", "User5"];
var new_users = ["User2", "User7", "USER5", "User9", "User10"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var user = new_users_1[_i];
    if (current_users.includes(user)) {
        console.log("You need to enter a new username");
    }
    else {
        console.log("This username is available");
    }
    ;
}
;
