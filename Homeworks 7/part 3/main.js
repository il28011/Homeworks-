function calculateAverageGrade(students) {
    // Перевіряємо, чи масив не пустий
    if (students.length === 0) {
        return 0; // або можна повернути null, в залежності від вимог
    }
    
    const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
    return totalGrade / students.length; // Обчислюємо середній бал
}

const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students)); // 4.4
