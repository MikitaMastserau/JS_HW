// Сделать функцию перевода римской нумерации в арабскую, в частности даты.

const getArabicDate = (romanDate) => {

    let arabicDate = +"";

    for (const symbol of romanDate) {
        if (symbol === "I") {
            arabicDate += 1;
        } else if (symbol === "V") {
            arabicDate += 5;
        } else if (symbol === "X") {
            arabicDate += 10;
        } else if (symbol === "L") {
            arabicDate += 50;
        } else if (symbol === "C") {
            arabicDate += 100;
        } else if (symbol === "D") {
            arabicDate += 500;
        } else if (symbol === "M") {
            arabicDate += 1000;
        }
    }
    return +arabicDate;
};

console.log(getArabicDate("XXI"));

// это не верно, нет возможности считать цифры  4, 9 или сочетания символов.

// верный вариант:

const ArabicDates = (romanianDates) => {
    const romanianDate = {
        I: 1,
        V: 5,
        X: 10,
        L: 100,
        C: 500,
        D: 1000,
    };

    let result = 0;

    for (let i = 0; i < romanianDates.length; i++) {
        const currentSymbol = romanianDates[i];
        const nextSymbol = romanianDates[i + 1];

        const currentValue = romanianDate[currentSymbol];
        const nextValue = romanianDate[nextSymbol];

        if (currentValue < nextValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        };
    };

    return result;
};

console.log(ArabicDates("XIX"));