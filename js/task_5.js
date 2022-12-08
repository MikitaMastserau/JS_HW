//ф-я, которая удаляет 1 и последний символы строки, и возвращает строку без них.

const deleteChars = function (str) {
    return str.slice(1, -1);
};

console.log(deleteChars("Hello"));