"use strict";

function padString(str, length, symbol, toLeft = false) {
    if (str.length >= length) {
        return str;
    }
    const paddingLength = length - str.length;
    const padding = symbol.repeat(paddingLength);
    return toLeft ? padding + str : str + padding;
}
