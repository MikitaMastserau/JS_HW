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