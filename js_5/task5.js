// Задача на вычисление факториала.

const getFactorial = (number) => {
    if (number === 0) {
        return 1;
    };

    return number * getFactorial(number - 1);
};

console.log(getFactorial(5));
console.log(getFactorial(4));
console.log(getFactorial(6));

// #2

const findFactorial = (number) => {
    return number !== 1 ? number * findFactorial(number - 1) : 1;
};

console.log(findFactorial(7));