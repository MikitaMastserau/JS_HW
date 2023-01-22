// функция должена разбивать кэмел кейс, вставляя пробелы между словами.

const breakCamelCase = (string) => {
    let newString = "";

    for (const letter of string) {
        if (letter === letter.toUpperCase()) {
            newString += ` ${letter}`;
        } else {
            newString += letter;
        };
    };

    return newString;
};

console.log(breakCamelCase("camelCasing"));
console.log(breakCamelCase("identifier"));
console.log(breakCamelCase("helloMyDearFriend"));