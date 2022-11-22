//Лизе нужно написать функцию, которая возвр имя пользователя. Она влюблена в Mark, поэтому его приветствуем иначе

const sayHello = function(name) {
    if (name === "Mark") {
        return "Hi, " + name[0].toUpperCase() + name.slice(1) + "!";
    }
    
    return "Hello, " + name[0].toUpperCase() + name.slice(1) + "!";
};

console.log(sayHello("oleg"));

/*или

const sayHello = function(name) {
    const hello = "Hello, ";
    const exclamation = "!";
    const hi = "Hi, ";

    if (name === "Mark") {
        return hi + name[0].toUpperCase() + name.slice(1) + exclamation
    };
    
    return (hello + name[0].toUpperCase() + name.slice(1) + exclamation);
};

console.log(sayHello("Oleg")); */
