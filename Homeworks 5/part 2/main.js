function isPalindrome(str) {
    // Прибираємо пробіли і перетворюємо рядок в нижній регістр для коректної перевірки
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    // Перевертаємо очищений рядок
    const reversedStr = cleanedStr.split('').reverse().join('');
    // Порівнюємо оригінальний очищений рядок з перевернутим
    return cleanedStr === reversedStr;
}