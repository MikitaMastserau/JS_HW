//ф-я, которая удаляет 1 и последний символы строки, и возвращает строку без них.

const deleteChars = function(str) {
    const deleteFirstAndLastLetters = str.slice(1, -1);

    console.log (deleteFirstAndLastLetters);
};

deleteChars("Hello");