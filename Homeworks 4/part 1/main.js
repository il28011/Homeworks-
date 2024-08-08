let input = prompt("Введіть число:");
let num = Number(input);
let isPrime = true;

if (isNaN(num) || !Number.isInteger(num)) {
  alert("Ви ввели невірне число");
} else {
  if (num <= 1) {
    isPrime = false;
  } else if (num <= 3) {
    isPrime = true;
  } else if (num % 2 === 0 || num % 3 === 0) {
    isPrime = false;
  } else {
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    console.log(`Число ${num} є простим числом.`);
  } else {
    console.log(`Число ${num} не є простим числом.`);
  }
}
