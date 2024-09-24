function uniqueValues(arr1, arr2) {
    let combinedArray = [...arr1, ...arr2];
    return combinedArray.filter((value, index, array) => array.indexOf(value) === index);
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]
