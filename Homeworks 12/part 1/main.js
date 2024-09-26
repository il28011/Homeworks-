function summarize(num) {
  return function(value = 1) { // Якщо аргумент не передано, за замовчуванням буде 1
    return num + value;
  };
}

// Приклад використання:
const addFive = summarize(5);

console.log(addFive(3)); // 8, оскільки 5 + 3 = 8
console.log(addFive());  // 6, оскільки 5 + 1 (за замовчуванням) = 6
