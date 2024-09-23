function groupNotificationsBySource(notifications) {
    return notifications.reduce((acc, notification) => {
        const { source, text, date } = notification; // Деструктуризація для отримання полів

        // Перевіряємо, чи вже існує ключ у акумуляторі для даного джерела
        if (!acc[source]) {
            acc[source] = []; // Створюємо новий масив, якщо ключ не існує
        }

        // Додаємо нове сповіщення до масиву для відповідного джерела
        acc[source].push({ text, date }); // Зберігаємо тільки текст і дату

        return acc; // Повертаємо акумулятор для наступної ітерації
    }, {}); // Першим значенням буде пустий об'єкт
}

// Приклад використання
const notifications = [
    { source: 'System', text: 'Update available', date: '2024-09-23' },
    { source: 'User', text: 'New message from Alice', date: '2024-09-22' },
    { source: 'System', text: 'Your password will expire soon', date: '2024-09-21' },
    { source: 'User', text: 'Meeting at 3 PM', date: '2024-09-23' },
];

const groupedNotifications = groupNotificationsBySource(notifications);
console.log(groupedNotifications);
