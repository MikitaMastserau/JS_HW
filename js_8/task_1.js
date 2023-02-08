// Реализовать функцию-банкомат. Количество банкнот не ограничено
// Дан массив купюр со следующим номиналом banknotes = [1, 5, 10, 20, 50, 100, 500];
// Функция принимает число (сумму, которую хочет списать пользователь) возвращает массив банкнот с наибольшим номиналом
// [500, 500]; [500, 500, 20, 5]; 10

BANKNOTS = [1, 5, 10, 20, 50, 100, 500];

const ATM = (sum) => {
    const result = [];

    if (sum > 0) {

        for (let i = BANKNOTS.length - 1; i > 0; i--) {
            const note = BANKNOTS[i];

            while (sum - note >= 0) {
                sum -= note;
                result.push(note);
            };
        };

        if (result.length === 1) {
            return result[0];
        };

        return result;
    };

    return "incorrect summary";
};

console.log(ATM(1000));
console.log(ATM(1025));
console.log(ATM(10));
console.log(ATM(0));
console.log("--------------------------------");

const ATMreduce = (sum) => {
    const result = [];

    const findBiggestNote = (notes, sum) => {
        return notes.reduce((biggestNote, note) => {
            return sum >= note ? note : biggestNote;
        });
    };

    if (sum > 0) {
        while (sum > 0) {
            const note = findBiggestNote(BANKNOTS, sum);

            result.push(note);

            sum -= note;
        };

        if (result.length === 1) {
            return result[0];
        };
        
        return result;
    };

    return "incorrect summary";
};



console.log(ATMreduce(1000));
console.log(ATMreduce(1025));
console.log(ATMreduce(10));
console.log(ATMreduce(0));
console.log("--------------------------------");

const ATMother = (sum) => {
    const sortBanknotes = [...BANKNOTS].sort((current, next) => next - current);
    const result = [];

    if (sum > 0) {
        sortBanknotes.forEach((note) => {
            while (sum >= note) {
                sum -= note;
                result.push(note);
            };
        });

        if (result.length === 1) {
            return result[0];
        };

        return result;
    };

    return "incorrect summary";
};

console.log(ATMother(1000));
console.log(ATMother(1025));
console.log(ATMother(10));
console.log(ATMother(0));