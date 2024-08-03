let numDays = 365; // Вводимо кількість днів
console.log("Start part 2.1"); // Якщо ви мали на увазі саме цю умову про дні
if (isNaN(numDays) || !Number.isInteger(numDays) || numDays < 365 || numDays > 367) { // Перевірка 
    console.log("Введене не вірне число");
} else {
    if (numDays == 365) {
        console.log("Не є високосним");
    } else {
        console.log("Високосний");
    }
    console.log("End");
}



// Варінт 2 якщо я все ж таки натупив і не зрозумів умови
let numYear = 2000; // Вводимо кількість років
console.log("Start part 2.2");
if (isNaN(numYear) || numYear < 2000 || numYear > 2009 || !Number.isInteger(numYear)) { // Перевірка 
    console.log("Введене значення не є коректним");
} else { 
    switch(numYear) {
        case 2000:
            console.log("Високосний");
            break;
        case 2001:
            console.log("Не високосний");
            break;
        case 2002:
            console.log("Не високосний");
            break;
        case 2003:
            console.log("Не високосний");
            break;
        case 2004:
            console.log("Високосний");
            break;
        case 2005:
            console.log("Не високосний");
            break;
        case 2006:
            console.log("Не високосний");
            break;
        case 2007:
            console.log("Не високосний");
            break;
        case 2008:
            console.log("Високосний");
            break;
        case 2009:
            console.log("Не високосний");
            break;
        default:
            console.log("Введене значення не є коректним");
    }
    console.log("End");
}