var usernames = ["User101", "IamAuser", "Admin", "user222", "internetUser"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var i = usernames_1[_i];
    if (i === "Admin") {
        console.log("Hello Admin. Welcome to this website. Thank you for logging in! Would you like to see the status report?");
    }
    else {
        console.log("Hello ".concat(i, ". Thank you for logging in again"));
    };
};




