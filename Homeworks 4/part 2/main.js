let input = prompt("Введіть число:");
let num = Number(input);

if (isNaN(num) || !Number.isInteger(num)) {
  alert("Ви ввели невірне число");
} else {
	for (let i = 1; i <= num; i++) {
		console.log(i)
	}
}