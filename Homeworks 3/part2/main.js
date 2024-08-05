let numYear = 3;
console.log("Start part 2");
if (isNaN(numYear) || !Number.isInteger(numYear)) {
    console.log("Ви ввели невірне значення");
} else {
    if ((numYear % 4 == 0 && numYear % 100 != 0) || (numYear % 400 == 0)) {
        console.log("Високосний");
    } else {
        console.log("Не є високосним");
    }
    console.log("End");
}