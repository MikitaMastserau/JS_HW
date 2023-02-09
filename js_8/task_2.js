// Ваша задача написать игру угадай число. Что нужно реализовать в игре: 
// Пользовательский ввод реализовать через promt() отображение подсказок через alert()
// 1. Генерация рандомного числа
// 2. Уровни сложности (по количеству попыток)
// 3. Количество игроков
// 4. Имена игроков
// 5. Поочередный ход
// 6. Вывод победителя и статистику игры
// 7. Подсказки (больше, меньше)

const LEVELS = {
    1: 15,
    2: 10,
    3: 5,
};

const random = () => Math.ceil(Math.random() * 100);

const pickLevel = (availableLevels) => {
    const levelsDiscription = Object.keys(availableLevels);
    const pickedLevel = prompt(`Выберете уровень сложности из этого списка: ${levelsDiscription}.`);

    if (!availableLevels[pickedLevel]) {
        alert("Такого уровня нет.");

        return pickLevel(availableLevels);
    };

    alert(`У вас будет ${availableLevels[pickedLevel]} попыток.`);
    return availableLevels[pickedLevel];
};

const pickPlayersAmount = () => {
    const playersAmount = Number(prompt("Выберите количество игроков."));

    if (isNaN(playersAmount) || !playersAmount) {
        alert("Введите число!");

        return pickPlayersAmount();
    };

    return playersAmount;
};

const pickPlayersNames = (playersAmount) => {
    const players = [];

    for (let i = 0; i < playersAmount; i++) {
        const playerName = prompt(`Введите имя ${i + 1}-го игрока.`);
        const trimedPlayerName = playerName.trim();

        if (trimedPlayerName.length === 0) {
            alert("Вы ничего не ввели! Введите имя!");

            return pickPlayersNames(playersAmount);
        };

        players.push(trimedPlayerName);
    };

    return players;
};

const makeAssumption = (player) => {
    const assumption = Number(prompt(`${player}, введите ваш ответ.`));

    if (isNaN(assumption) || !assumption) {
        alert("Введите число!");

        return makeAssumption(player);
    };

    return assumption;
};

const askPlayAgain = () => {
    const playAgain = confirm("Сыграть ещё раз?");

    if (playAgain) {
        return Game();
    };
};

const Game = () => {
    const secretNumber = random();
    let triesAmount = pickLevel(LEVELS);
    const playersAmount = pickPlayersAmount();
    const players = pickPlayersNames(playersAmount);
    alert(secretNumber);

    let turnsCount = 1;

    while (true) {
        for (const player of players) {
            alert(`Ход ${turnsCount}. Очередь ${player}.`);

            const assumption = makeAssumption(player);

            if (assumption === secretNumber) {
                alert(`Игрок ${player} победил! Загаданное число - ${secretNumber}! Попыток потребовалось: ${turnsCount}!`);

                return askPlayAgain();
            } else if (assumption > secretNumber) {
                alert("Загаданное число меньше.");
            } else {
                alert("Загаданное число больше.");
            };
        };

        if (triesAmount === turnsCount) {
            alert("Вы не угадали, попытки закончились, поражение!");

            break;
        };

        turnsCount++;
    };
    
    askPlayAgain();
};

Game();