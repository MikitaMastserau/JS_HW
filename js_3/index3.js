/*удалить пользователей чьи id принимает в массиве вторым аргументов функция*/

const users = [
    {
      id: 1,
      name: "Alex",
    },
    {
      id: 2,
      name: "Tamara",
    },
    {
      id: 3,
      name: "Max",
    },
];

const removeUsers = (users, arrayId) => {
    return users.filter(({ id }) => !arrayId.includes(id));
};

console.log(removeUsers(users, [2, 3]));

console.log(removeUsers(users, [3]));