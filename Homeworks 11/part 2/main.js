function validate(fn, validator) {
  return function(...args) {
    if (!validator(...args)) {
      throw new Error('Validation failed');
    }
    return fn.apply(this, args); // Виклик оригінальної функції, якщо аргументи валідні
  };
}

// Приклад валідатора: перевіряє, що всі аргументи є числами
function isNumberValidator(...args) {
  return args.every(arg => typeof arg === 'number');
}

// Приклад функції: повертає суму двох чисел
function sum(a, b) {
  return a + b;
}

// Створюємо функцію з валідацією
const validatedSum = validate(sum, isNumberValidator);

try {
  console.log(validatedSum(3, 5)); // 8 (валідно)
  console.log(validatedSum(3, '5')); // Викидається помилка: Validation failed
} catch (error) {
  console.error(error.message);
}
