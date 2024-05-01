let usernames: string[] = ["User101", "IamAuser", "Admin", "user222", "internetUser"];
for (let i of usernames) {
    if (i === "Admin") {
        console.log("Hello Admin. Welcome to this website. Thank you for logging in! Would you like to see the status report?");
    }
    
else {
        console.log(`Hello ${i}. Thank you for logging in again`);
};
};