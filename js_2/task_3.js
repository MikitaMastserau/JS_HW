/*Функция принимает массив чисел. Возвращает массив строк такого вида:
['Value: 3; Index: 0; Squared: 9','Value: 4; Index: 1; Squared: 16','Value: 6; Index: 2; Squared: 36']
*/

const infoNumbers = (numbers) => {
    if (!Array.isArray(numbers)) return;

    return numbers.map((number, index) => {
        return `Value: ${number}; Index: ${index}; Squared: ${number ** 2}`
    })
};

console.log(infoNumbers([3, 4, 6]));