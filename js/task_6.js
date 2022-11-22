/* Написать функцию которая принимает в себя строчное значение состоящее из одного слова. В слове могут быть буквы разных регистров.
Результатом выполнения данной функции должна быть строка, в которой первая буквы заглавная, а все последующие в нижнем регистре.
Если в слове четное количество букв, то и последняя буква должна быть заглавной.
Пример: someFn(‘пиТеР’) // Питер
        someFn(‘javaScript’) // JavascripT */


const someFn = function(word) {
    if (word.length % 2 === 0) {
        const evenBigFirstLetter = word[0].toUpperCase();
        const evenSmallLetters = word.slice(1, -1).toLowerCase();
        const evenBigLastLetter = word.slice(-1).toUpperCase();
        return evenBigFirstLetter + evenSmallLetters + evenBigLastLetter;
    };

    const bigFirstLetter = word[0].toUpperCase();
    const smallLetters = word.slice(1).toLowerCase();
    return bigFirstLetter + smallLetters;
};

console.log (someFn("javaScript"));