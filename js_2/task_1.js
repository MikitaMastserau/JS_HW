/* Функция принимает 2 аргумента 1 – массив имён, 2 – массив букв;
Если имя пользователя из первого массива начинается с буквы, которая есть во втором аргументе – 
этот пользователь не должен попасть в массив результата.
*/

const userList = ["Alex", "alex", "Max", "Vika", "Petr", "Alexandra"];

const filterUsers = (users, letters) => {
    if (!Array.isArray(users) || !Array.isArray(letters)) return;

    const lowerCasedLetters = letters.map((letter) => letter.toLowerCase());

    return users.filter((user) => {
        const firstLetter = user[0].toLowerCase();

        return !lowerCasedLetters.includes(firstLetter);
    })
}

console.log(filterUsers(userList, ["A", "p"]));