// Функція-валідатор, що перевіряє, чи всі аргументи є числами
function isNumber(...args) {
    return args.every(arg => typeof arg === 'number');
}

// Функція, яку ми будемо перевіряти
function sum(a, b) {
    return a + b;
}

// Використовуємо декоратор
const validatedSum = validate(sum, isNumber);

try {
    console.log(validatedSum(3, 5)); // Виведе: 8
    console.log(validatedSum(3, "5")); // Викине помилку: Validation failed!
} catch (error) {
    console.error(error.message);
}
