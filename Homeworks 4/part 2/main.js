let enteredNumber = prompt("Введіть число:");
let number = Number(enteredNumber);

if (isNaN(number) || !Number.isInteger(number) || number <= 0) {
  alert("Ви ввели невірне число");
} else {
  let perfectNumbers = [];

  for (let i = 1; i <= number; i++) {
    let sumOfDivisors = 0;

    // Finding all divisors of number i
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        sumOfDivisors += j;
      }
    }

    // Checking if the number is perfect
    if (sumOfDivisors === i) {
      perfectNumbers.push(i);
    }
  }

  if (perfectNumbers.length > 0) {
    alert("Досконалі числа: " + perfectNumbers.join(", "));
  } else {
    alert("Досконалих чисел немає в цьому діапазоні.");
  }
}
