// Функция принимает массив чисел, а возвращает число которое встречается лишь 1 раз. 

const findLonelyNumbers = (numbersList) => {
    return numbersList.find((number) => numbersList.indexOf(number) === numbersList.lastIndexOf(number));
};

console.log(findLonelyNumbers([1,1,2,3,3,4,4]));
console.log(findLonelyNumbers([1,1,2,2,3,3,4,5,5]));

// #2
console.log("--------------------------");

const findUniqNumbers = (numbersList) => {
    const amountMeeting = numbersList.reduce((meetings, number) => {
        if (meetings[number]) {
            meetings[number] += 1;
        } else {
            meetings[number] = 1;
        };

        return meetings;
    }, {});

    for (const number in amountMeeting) {
        if (amountMeeting[number] === 1) {
            return +number;
        };
    };
};

console.log(findUniqNumbers([1,1,2,2,3,4,4,5,5]));