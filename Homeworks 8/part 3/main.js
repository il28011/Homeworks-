function analyzeArray(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const average = sum / arr.length;

    // Реалізація пошуку мінімального значення через reduce
    const min = arr.reduce((acc, curr) => (curr < acc ? curr : acc), arr[0]);

    // Реалізація пошуку максимального значення через reduce
    const max = arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);

    return {
        sum: sum,
        average: average,
        min: min,
        max: max
    };
}

const numbers = [1, 2, 3, 4, 5];
console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }
