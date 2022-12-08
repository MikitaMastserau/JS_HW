/*Функция принимает массив букв разных регистров. Результатом функции должен быть новый массив где буквы 
которые были в нижнем регистре станут в верхнем, а в верхнем станут в нижнем
*/

const changeLetters = (letters) => {
    if (!Array.isArray(letters)) return;

    return letters.map((letter) => {
        if (letter === letter.toUpperCase()) {
            return letter.toLowerCase();
        };

        return letter.toUpperCase();
    });
};

console.log(changeLetters(["a", "B", "c"]));