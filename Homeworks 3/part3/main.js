let numAge = 1;
const textAge1 = " рік";
const textAge2 = " роки";
const textAge3 = " років";
console.log("Start part 3");
if (isNaN(numAge) || !Number.isInteger(numAge) || numAge < 1) {
    console.log("Введене невірне значення");
} else {
    let lastDigit = numAge % 10;
    let lastTwoDigits = numAge % 100;

    if (lastTwoDigits > 10 && lastTwoDigits < 20) {
        console.log("Вам " + numAge + textAge3);
    } else if (lastDigit === 1) {
        console.log("Вам " + numAge + textAge1);
    } else if (lastDigit > 1 && lastDigit < 5) {
        console.log("Вам " + numAge + textAge2);
    } else {
        console.log("Вам " + numAge + textAge3);
    }
    console.log("End");
}
