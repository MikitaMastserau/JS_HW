// Написать функция которая принимает строку, и допустимое количество символов.
// Если длина строки превышает допустимое количество символов,
// функция должна обрезать строку а в конец  добавить многоточие

const stringLength = (string, length) => {
    if (string.length > length) {
        return `${string.slice(0, length)}...`;
    } 
    return string;
};

console.log(stringLength("Hello", 3)); // ‘Hel…’
console.log(stringLength("Hello", 6));