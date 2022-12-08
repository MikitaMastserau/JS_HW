//Лизе нужно написать функцию, которая возвр имя пользователя. Она влюблена в Mark, поэтому его приветствуем иначе

const sayHello = function (name) {
    if (name.toLowerCase() === "mark") {
        return "Hi, " + name[0].toUpperCase() + name.slice(1).toLowerCase() + "!";
    };
    
    return "Hello, " + name[0].toUpperCase() + name.slice(1).toLowerCase() + "!";
};

console.log(sayHello("MARK"));
console.log(sayHello("oleg"));