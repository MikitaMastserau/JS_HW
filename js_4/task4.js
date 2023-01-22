// Функция принимает объект с неограниченным количеством полей.
// Результатом выполнения функции должен быть объект,
// в котором были отсеяны поля со значениями null или undefined

const filterFields = (object) => {
    const entries = Object.entries(object);

    return entries.reduce((result, [key, value]) => {
        if (value) {
            result[key] = value;
        }
        return result;
    }, {});
};

console.log(filterFields({ a: 1, b: "Hello", c: null, z: undefined}));; // { a: 1, b: ‘Hello’ }
console.log(filterFields({ name: "alex", age: 10, friends: [], address: null}));  // { name: ‘alex’, age: 10, friends: [], }