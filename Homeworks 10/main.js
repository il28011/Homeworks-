class Notifications {
    constructor(notifications) {
        this.notifications = notifications;
        this.groups = this.groupBySource();
    }

    groupBySource() {
        return this.notifications.reduce((acc, notification) => {
            const { source, text, date } = notification;

            if (!acc[source]) {
                acc[source] = [];
            }

            acc[source].push({ text, date });
            return acc;
        }, {});
    }

    // Додаємо ітератор
    *[Symbol.iterator]() {
        for (const key in this.groups) {
            for (const notification of this.groups[key]) {
                yield notification; // Повертаємо сповіщення по одному
            }
        }
    }
}

// Приклад використання
const notifications = [
    { source: 'System', text: 'Update available', date: '2024-09-23' },
    { source: 'User', text: 'New message from Alice', date: '2024-09-22' },
    { source: 'System', text: 'Your password will expire soon', date: '2024-09-21' },
    { source: 'User', text: 'Meeting at 3 PM', date: '2024-09-23' },
];

const groupedNotifications = new Notifications(notifications);

// Перебір сповіщень у плоскому вигляді
for (const notification of groupedNotifications) {
    console.log(notification);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function memoize(fn, cacheSize) {
    const cache = new Map();
    const order = [];

    return function(...args) {
        const key = JSON.stringify(args); // Створюємо ключ для кешу

        // Перевіряємо, чи вже є в кеші
        if (cache.has(key)) {
            return cache.get(key); // Повертаємо значення з кешу
        }

        const result = fn.apply(this, args); // Виконуємо функцію
        cache.set(key, result); // Додаємо в кеш

        // Додаємо порядок виклику
        order.push(key);
        
        // Перевіряємо, чи слід видалити старі значення з кешу
        if (order.length > cacheSize) {
            const oldestKey = order.shift(); // Видаляємо найстаріший ключ
            cache.delete(oldestKey); // Видаляємо з кешу
        }

        return result;
    };
}

// Приклад використання memoize
const slowFunction = (num) => {
    // Імітація повільної функції
    for (let i = 0; i < 1e9; i++) {}
    return num * 2;
};

const memoizedFunction = memoize(slowFunction, 3);

console.log(memoizedFunction(2)); // обчислений
console.log(memoizedFunction(2)); // повернеться з кешу
console.log(memoizedFunction(3)); // обчислений
console.log(memoizedFunction(3)); // повернеться з кешу
console.log(memoizedFunction(4)); // обчислений
console.log(memoizedFunction(2)); // повернеться з кешу
console.log(memoizedFunction(5)); // обчислений (перезаписує 3)
console.log(memoizedFunction(3)); // знову обчислюється
