//Лизе нужно написать функцию, которая возвр имя пользователя. Она влюблена в Mark, поэтому его приветствуем иначе

const sayHello = function(name) {
    if (name === "Mark") {
        return "Hi, " + name + "!";
    }
    
    return "Hello, " + name + "!";
};

console.log(sayHello("Mark"));

/*или

const sayHello = function(name) {
    const hello = "Hello, ";
    const exclamation = "!";
    const hi = "Hi, ";

    if (name === "Mark") {
        return hi + name + exclamation
    };
    
    return (hello + name + exclamation);
};

console.log(sayHello("Oleg")); */
