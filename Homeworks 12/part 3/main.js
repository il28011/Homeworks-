function sequence(...functions) {
  return function(initialValue) {
    return functions.reduce((acc, fn) => fn(acc), initialValue);
  };
}

// Приклад використання:

function addTwo(x) {
  return x + 2;
}

function multiplyByThree(x) {
  return x * 3;
}

function subtractFive(x) {
  return x - 5;
}

const combinedFunction = sequence(addTwo, multiplyByThree, subtractFive);

console.log(combinedFunction(5)); // ((5 + 2) * 3) - 5 = 16
