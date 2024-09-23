function isPrime(num) {
    if (num <= 1) return false; // 0 і 1 не є простими числами
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Якщо число ділиться на i, воно не просте
    }
    return true; // Число - просте
}

function filterPrimeNumbers(arr) {
    return arr.filter(isPrime); // Фільтруємо масив по простим числам
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(filterPrimeNumbers(numbers)); // [2, 3, 5, 7, 11, 13]
