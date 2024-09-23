function group(array, key) {
    return array.reduce((acc, obj) => {
        const keyValue = obj[key]; // Отримуємо значення ключа

        // Якщо ключ зі значенням ще не існує, створюємо новий масив
        if (!acc[keyValue]) {
            acc[keyValue] = [];
        }

        // Додаємо об'єкт до відповідної групи
        acc[keyValue].push(obj);
        return acc; // Повертаємо акумулятор для наступної ітерації
    }, {}); // Початкове значення - пустий об'єкт
}

// Приклад використання
const items = [
    { id: 1, category: 'fruit', name: 'apple' },
    { id: 2, category: 'vegetable', name: 'carrot' },
    { id: 3, category: 'fruit', name: 'banana' },
    { id: 4, category: 'vegetable', name: 'celery' },
];

const groupedItems = group(items, 'category');
console.log(groupedItems);
