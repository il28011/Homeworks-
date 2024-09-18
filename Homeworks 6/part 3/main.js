"use strict";

function camelCase(str, separator) {
    const words = str.split(separator);
    for (let i = 0; i < words.length; i++) {
        words[i] = i === 0 ? words[i].toLowerCase() : capitalize(words[i]);
    }
    return words.join('');
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}