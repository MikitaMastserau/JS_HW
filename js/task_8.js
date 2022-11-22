/* Написать функцию, которая склеивает 2 строки друг с другом. 
Имейте ввиду, между ними должен быть пробел.
concatenate(‘Hello’, ‘World’) // ‘Hello World’. */


const concatenate = function(firstWord, secondWord) {
    return firstWord + " " + secondWord;
};

console.log (concatenate("Hello", "World"));