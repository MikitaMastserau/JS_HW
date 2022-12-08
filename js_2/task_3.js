const infoNumbers = (numbers) => {
    if (!Array.isArray(numbers)) return;

    return numbers.map((number, index) => {
        return `Value: ${number}; Index: ${index}; Squared: ${number ** 2}`
    })
};

console.log(infoNumbers([3, 4, 6]));