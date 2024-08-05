let numToCheck = 15;// вводимо числове значення для нашої задачі
console.log("Start part 1")
if (isNaN(numToCheck) || numToCheck <= 0) {   // перевірка чи вказане значення є числом та чи воно є більшим числа
	console.log("Значення не є коректним")
} else {
if (numToCheck % 3 === 0 && numToCheck % 5 === 0) {
	console.log("FizzBuzz");
} else if (numToCheck % 3 === 0) {
	console.log("Fizz");
} else if (numToCheck % 5 === 0) {
	console.log("Buzz");
} else {
	console.log("Wasted");
}
console.log("end")
}







