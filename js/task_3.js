//функция которая возращает меньшее из чисел а, b.

const min = function(a, b) {
    if (a > b) {
        console.log(b);
        return;
    };
    
    console.log(a);
};

min(4, 3);

/* или (если нужно при равных другое выводить, не понял задание)

const min = function(a, b) {
    if (a > b) {
        console.log(b);
        return;
    };
    
    if (a < b) {
        console.log(a);
        return;
    };

    if (a === b) {
        console.log("min not found");
        return;
    };
};

min(3, 3); */