// Функція, яка випадково викидає помилку
async function unreliableOperation() {
    const success = Math.random() > 0.7; // 30% ймовірності успішного виконання
    if (!success) {
        throw new Error("Random failure");
    }
    return "Success!";
}

// Декоруємо функцію
const retriedOperation = retry(unreliableOperation, 5);

retriedOperation()
    .then(result => console.log(result)) // Якщо успішно
    .catch(error => console.error(error.message)); // Якщо всі спроби зазнали невдачі
