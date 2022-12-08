//функция которая возращает меньшее из чисел а, b.

const min = function (a, b) {
    if (a > b) {
        return b;
    };
    
    if (a < b) {
        return a;
    };
    
    return "they are equal";
};

console.log(min(4, 3));
console.log(min(4, 5));
console.log(min(3, 3));

//Math.min(a, b)