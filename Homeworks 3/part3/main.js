let numAge = 1;
const textAge1 = " рік";
const textAge2 = " роки";
const textAge3 = " років";
console.log("Start part 3");
if (isNaN(numAge) || !Number.isInteger(numAge) || numAge < 1 || numAge > 50) {
    console.log("Введене невірне значення");
} else {
    if (numAge == 1 || numAge == 21 || numAge == 31 || numAge == 41) {
        console.log("Вам " + numAge + textAge1);
    } else if ((numAge > 1 && numAge < 5) || (numAge > 21 && numAge < 25) || (numAge > 31 && numAge < 35) || (numAge > 41 && numAge < 45)) {
        console.log("Вам " + numAge + textAge2);
    } else if ((numAge > 4 && numAge < 21) || (numAge > 24 && numAge < 31) || (numAge > 34 && numAge < 41) || (numAge > 44 && numAge < 51)) {
        console.log("Вам " + numAge + textAge3);
    }
    console.log("End");
}