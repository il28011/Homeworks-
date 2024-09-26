function counter(startValue, step) {
  let currentValue = startValue;

  // Основна функція, яка повертає поточне значення лічильника
  function count() {
    currentValue += step;
    return currentValue;
  }

  // Додаємо методи до функції count
  count.increment = function() {
    currentValue += step;
    return currentValue;
  };

  count.decrement = function() {
    currentValue -= step;
    return currentValue;
  };

  count.reset = function() {
    currentValue = startValue;
    return currentValue;
  };

  return count;
}

// Приклад використання:
const myCounter = counter(10, 2);

console.log(myCounter()); // 12 (10 + 2)
console.log(myCounter()); // 14 (12 + 2)

console.log(myCounter.increment()); // 16 (14 + 2)
console.log(myCounter.decrement()); // 14 (16 - 2)
console.log(myCounter.reset());     // 10 (скидання до початкового значення)
