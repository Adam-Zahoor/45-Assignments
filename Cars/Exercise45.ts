function myCar(manufacturer: string, modelName: string, ...extraInfo: { [key: string]: any}[] ): object {

    const car = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraInfo)
    };

    return car;
};

let value = myCar("Suzuki", "Liana", {modelYear: 2015}, {features: ["ABS", "Automatic Suspension", "Auto Gear-changing"]});
console.log(value);




