/*Функция принимает массив слов, возвращает новый массив слов, у которых первая буква большая, остальные маленькие.
Пример: fn([‘hello’, ‘wOrLd’]) // [‘Hello’, ‘World’];
*/

const words = ['hello', 'wOrLd'];

const changeWords = (words) => words.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());

console.log(changeWords(words));
