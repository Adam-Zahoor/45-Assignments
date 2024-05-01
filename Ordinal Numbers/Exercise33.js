var ordinalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i of ordinalNum) {
// if (i === 1) {
//     console.log(1,"st");
// } else if (i ===2) {
//     console.log(2,"nd");
// } else if (i === 3) {
//     console.log(3,"rd");
// } else {
//     console.log(i,"th");
// };
//     i++
// };
ordinalNum.forEach(function (num) {
    if (num === 1) {
        console.log(1, "st");
    }
    else if (num === 2) {
        console.log(2, "nd");
    }
    else if (num === 3) {
        console.log(3, "rd");
    }
    else {
        console.log(num, "th");
    }
    ;
});
