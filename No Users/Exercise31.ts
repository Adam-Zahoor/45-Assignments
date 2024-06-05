let usernames: string[] = ["User101", "IamAuser", "Admin", "user222", "internetUser"];

if (usernames.length < 1) {
    console.log("We need to find some users!");
}

else {
    
    let a = 0;
    while(a < usernames.length) {
        usernames.pop();
    };

};

console.log(usernames.length);
console.log("We need to find some users!");






