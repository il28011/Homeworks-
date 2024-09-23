function capitalizeStrings(words) {
    return words.map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
}

const words = ["apple", "banaNA", "kiWi", "ORANGE"];
console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]
