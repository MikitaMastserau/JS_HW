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