function logArguments(fn) {
  return function(...args) {
    console.log('Arguments:', ...args);
    return fn.apply(this, args); // Виклик оригінальної функції з переданими аргументами
  };
}

// Приклад використання:
function sum(a, b) {
  return a + b;
}

const loggedSum = logArguments(sum);

console.log(loggedSum(3, 5)); // Лог: Arguments: 3 5, Результат: 8
