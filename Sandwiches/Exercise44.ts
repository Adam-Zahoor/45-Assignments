function mySandwich(ingredients: string[]) {

    console.log("Your sandwich includes: ");

    ingredients.forEach(item => {
        console.log("- ", item);
    });

    console.log("Hope you enjoy your sandwich! \n");
};

mySandwich(["Butter", "Cheese", "Onions\n"]);
mySandwich(["Tomatoes", "Beef Steak", "Beans\n"]);
mySandwich(["Capsicum", "Corn", "Lettuce\n"]);


























