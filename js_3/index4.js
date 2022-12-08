/*Функция принимает строку и проверяет её на палиндром. В случае если строка является палиндромом возвращает true иначе false
//isPalindrome('Привет') --> false   //isPalindrome('шалаш') --> true    */

// #1
const isPalindrome = (string) => {
    string = string.toLowerCase();
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }    
    };
    return true;
};

// #2

const isPalindromeRightAnswer = (word) => {
    const chars = word.toLowerCase().split("");
    const reversedCharsList = chars.reverse();
    const reversedWord = reversedCharsList.join("");
    return word.toLowerCase() === reversedWord;
};

console.log(isPalindromeRightAnswer("Шалаш"));
console.log(isPalindromeRightAnswer("АЛИНА"));

// #3

const isPalindromeShortVariant = (word) => 
    word.toLowerCase() === word.toLowerCase().split("").reverse().join("");