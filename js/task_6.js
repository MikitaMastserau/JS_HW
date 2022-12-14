/* Написать функцию которая принимает в себя строчное значение состоящее из одного слова. В слове могут быть буквы разных регистров.
Результатом выполнения данной функции должна быть строка, в которой первая буквы заглавная, а все последующие в нижнем регистре.
Если в слове четное количество букв, то и последняя буква должна быть заглавной.
Пример: someFn(‘пиТеР’) // Питер
        someFn(‘javaScript’) // JavascripT */


const someFn = function (word) {
    const bigFirstLetter = word[0].toUpperCase();
    
    if (word.length % 2 === 0) {
        const smallLetters = word.slice(1, -1).toLowerCase();
        const evenBigLastLetter = word.slice(-1).toUpperCase();
        return bigFirstLetter + smallLetters + evenBigLastLetter;
    };

    return bigFirstLetter + word.slice(1).toLowerCase();
};

console.log (someFn("javaScript"));
console.log (someFn("helLO"));