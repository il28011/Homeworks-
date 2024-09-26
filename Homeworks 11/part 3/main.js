function retry(fn, maxAttempts) {
  return function(...args) {
    let attempts = 0;
    while (attempts < maxAttempts) {
      try {
        return fn.apply(this, args); // Повертаємо результат, якщо виклик успішний
      } catch (error) {
        attempts++;
        console.log(`Attempt ${attempts} failed`);
        if (attempts === maxAttempts) {
          throw error; // Викидаємо помилку після досягнення ліміту спроб
        }
      }
    }
  };
}

// Приклад функції, яка може випадково викинути помилку
function unreliableFunction() {
  if (Math.random() < 0.7) {
    throw new Error("Random failure");
  }
  return "Success!";
}

// Створюємо функцію з обмеженою кількістю спроб
const reliableFunction = retry(unreliableFunction, 3);

try {
  console.log(reliableFunction()); // Якщо пощастить, отримаємо "Success!"
} catch (error) {
  console.error("Function failed after 3 attempts: ", error.message);
}
