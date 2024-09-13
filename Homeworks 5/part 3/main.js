function findGCD(a, b) {
    // Реалізуємо алгоритм Евкліда
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}