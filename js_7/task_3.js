// Написать метод которые повторяет логику Object.entries(). 
// [[‘a’, 1], [‘b’, 2]]

const customEntries = (obj) => {
    const result = [];

    for (const key in obj) {
        const chunk = [key, obj[key]];

        result.push(chunk);
    };

    return result;
};

console.log(customEntries({a: 1, b:2}));