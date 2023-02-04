// Создает массив элементов, разбитых на группы по размеру длины.
// Если массив не может быть разделен равномерно, последним фрагментом будут оставшиеся элементы.

const chunk = (lettersInArray, size) => {
    const result = [];

    let stack = [];


    for (let i = 0; i < lettersInArray.length; i++) {
        const currentElement = lettersInArray[i];

        stack.push(currentElement);

        if (stack.length === size || i === lettersInArray.length - 1) {
            result.push(stack);
            stack = [];
        };
    };

    return result;
};

console.log(chunk(['a', 'b', 'c', 'd'], 3));
console.log(chunk(['a', 'b', 'c', 'd'], 2));

// #2 more clean
console.log("---------------------#----------------------");

const otherChunk = (list, size) => {
    const copy = [...list];
    const result = [];

    while (copy.length > 0) {
        const chunkedList = copy.splice(0, size);

        result.push(chunkedList);
    };

    return result;
};


console.log(otherChunk(['a', 'b', 'c', 'd', 'e'], 3));
console.log(otherChunk(['a', 'b', 'c'], 2));