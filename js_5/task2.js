// В арифмитической прогрессии отсутствует ровно один член из исходного ряда. В остальном данная цепочка идентична исходной.
// Найдите пропущенный член. Размер прогрессии всегда будет не менее 3 чисел. Отсутствующий член никогда не будет ни первым, ни последним.

const findMissing = (progression) => {
    return progression.reduce((result, value) => {
        if (value > result) {
            return result;
        }
        return value + 2;
    }, 1);
};

console.log(findMissing([1, 5, 7, 9, 11]));

const findMissingShortVariant = (progression) => {
    return progression.reduce((result, value) => value > result ? result : value + 2, 1);
};

const findMissingRight = (progression) => {
    for (let i = 0; i < progression.length; i++) {
        const currentNumber = progression[i];
        const nextNumber = progression[i + 1];
        const nextNextNumber = progression[i + 2];

        const currentDifference = nextNumber - currentNumber;
        const nextDifference = nextNextNumber - nextNumber;

        if (currentDifference !== nextDifference) {
            return currentNumber + nextDifference;
        }
    }
};

console.log(findMissingRight([1, 3, 5, 7, 11]));

const findMissingMoreRight = (progression) => {
    const firstMember = progression[0];
    const lastMember = progression[progression.length - 1];
    const membersAmount = progression.length;

    const progressionStep = (lastMember - firstMember) / membersAmount;

    for (let i = 0; i < progression.length; i++) {
        if (progression[i] + progressionStep !== progression[i + 1]) {
            return progression[i] + progressionStep;
        };
    };
};

console.log(findMissingMoreRight([1, 3, 7, 9, 11]));