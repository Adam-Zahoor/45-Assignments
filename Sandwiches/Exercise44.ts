function mySandwich(ingredients: string[]) {

    console.log("\nYour sandwich includes: ");

    ingredients.forEach(item => {
        console.log("- ", item);
    });

    console.log("Hope you enjoy your sandwich!");
};

mySandwich(["Butter", "Cheese", "Onions\n"]);
mySandwich(["Tomatoes", "Beef Steak", "Beans\n"]);
mySandwich(["Capsicum", "Corn", "Lettuce\n"]);
