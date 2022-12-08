/*Функция принимает, массив строчных и числовых значений. Функция должна вернуть новый массив 
состоящий только из строк, количество символов которых чётное.
*/

const getEvenStrings = (values) => {
    if (!Array.isArray(values)) return;

    return values.filter((value) => {
        if (typeof value === "string") {
            return value.length % 2 === 0;
        }

        return;
    });
};

console.log(getEvenStrings(["Hi", 2, 3, 4, 5, "JS", 2, "C++"]));