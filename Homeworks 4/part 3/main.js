let input = prompt("Введіть висоту ялинки:");
let height = Number(input);

if (isNaN(height) || !Number.isInteger(height) || height <= 0) {
  alert("Ви ввели невірне число");
} else {
  let tree = '';
  for (let i = 1; i <= height; i++) {
    let spaces = ' '.repeat(height - i);
    let stars = '*'.repeat(2 * i - 1);
    tree += spaces + stars + spaces + '\n';
  }
  console.log(tree);
}
