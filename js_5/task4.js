// Верните количество пар, которые вы можете составить, предполагая, что только перчатки одного цвета могут образовывать пары.


const getAmountOfGlovesFirst = (gloves) => {
    const amountOfGloves = new Map();

    gloves.forEach((glove)=> {
        if (amountOfGloves.has(glove)) {
            amountOfGloves.set(glove, amountOfGloves.get(glove) + 1);
        } else {
            amountOfGloves.set(glove, 1);
        };
    });

    return Array.from(amountOfGloves).reduce((result, [gloveColor, amount]) => {
        if (amount > 1) {
            result[gloveColor] = Math.floor(amount / 2);
        };

        return result;
    }, {});
};

console.log(getAmountOfGlovesFirst(["yellow", "green", "yellow", "black", "black"]));
console.log(getAmountOfGlovesFirst(["yellow", "yellow", "yellow", "yellow", "black", "black"]));

// #2 more useful

console.log("--------------------------#2-------------------------------");


const getAmountOfGlovesSecond = (gloves) => {
    const amountOfGloves = new Map();

    gloves.forEach((glove)=> {
        if (amountOfGloves.has(glove)) {
            amountOfGloves.set(glove, amountOfGloves.get(glove) + 1);
        } else {
            amountOfGloves.set(glove, 1);
        };
    });

    return Array.from(amountOfGloves).reduce((result, [gloveColor, amount]) => {
        if (amount > 1) {
            result[gloveColor] = Math.floor(amount / 2);
        };

        return result;
    }, {});
};

console.log(getAmountOfGlovesSecond(["red", "green", "red", "blue", "blue"]));
console.log(getAmountOfGlovesSecond(["red", "red", "red", "red", "red", "red"]));

// #3 the most useful

console.log("--------------------------#3-------------------------------");

const getAmountOfGlovesThird = (gloves) => {
    const amountOfGloves = new Map();

    gloves.forEach((glove)=> {
        if (amountOfGloves.has(glove)) {
            amountOfGloves.set(glove, amountOfGloves.get(glove) + 1);
        } else {
            amountOfGloves.set(glove, 1);
        };
    });

    return Array.from(amountOfGloves).reduce((result, [gloveColor, amount]) => {
        if (amount > 1) {
            const pairs = Math.floor(amount / 2);
            result[gloveColor] = {
                pairs,
            };
            if (amount % 2 !== 0) {
                result[gloveColor].lonely = amount - pairs * 2;
            };
        } else if (amount === 1) {
            result[gloveColor] = {
                lonely: 1,
            };
        };

        return result;
    }, {});
};

console.log(getAmountOfGlovesThird(["orange", "green", "orange", "orange", "orange", "green", "green"]));
console.log(getAmountOfGlovesThird(["violet", "violet", "violet", "violet", "violet", "violet", "violet", "white"]));