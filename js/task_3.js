//функция которая возращает меньшее из чисел а, b.

const min = function(a, b) {
    if (a > b) {
        return b;
    };
    
    return a;
};

console.log(min(4, 3));

/* или (если нужно при равных другое выводить, не понял задание)

const min = function(a, b) {
    if (a > b) {
        return b;
    };
    
    if (a < b) {
        return a;
    };

    if (a === b) {
        return "min not found";
    };
};

console.log(min(3, 3)) */