/*Функция принимает массив пользователей. Исходные данные см. ниже. Возвращает объект, состоящий из двух полей: women и men. Данные
  поля являются массивами, в которых содержаться пользователи, подходящие по категории gender соответственно.
 Также, вместо двух полей first_name и last_name у каждого из объектов должнобыть поле fullName в котором будут объеденины убранные поля 
(first_name и last_name). Количество пользователей может быть не ограничено. */


const userList = [
  {
    id: 1,
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female',
    ip_address: '26.58.193.2',
  },
  {
    id: 2,
    first_name: 'Petr',
    last_name: 'Jackson',
    email: 'gfrediani1@senate.gov',
    gender: 'Male',
    ip_address: '229.179.4.212',
  },
];

const divideUsers = (users) => {

  return users.reduce((dividing, {first_name, last_name, ...otherFields}) => {
      const genderGroup = otherFields.gender === "Female" ? "women" : "men";

      const userToPush = {
        fullName: `${first_name} ${last_name}`,
        ...otherFields,
      };

      dividing[genderGroup].push(userToPush);

      return dividing;

  }, { men: [], women: [] } );
};

console.log(divideUsers(userList));

// #2 supercool

const users = [
  {
    id: 1,
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female',
    ip_address: '26.58.193.2',
  },
  {
    id: 2,
    first_name: 'Petr',
    last_name: 'Jackson',
    email: 'gfrediani1@senate.gov',
    gender: 'Male',
    ip_address: '229.179.4.212',
  },
  {
    id: 3,
    first_name: 'Raketa',
    last_name: 'Smith',
    email: 'cccccccc@senate.gov',
    gender: 'Dolphin',
    ip_address: '333.174.4.444',
  },
  {
    id: 4,
    first_name: 'Kardif',
    last_name: 'Ali',
    email: 'yyyyyy1@senate.gov',
    gender: 'Trans',
    ip_address: '999.179.4.888',
  },
  {
    id: 5,
    first_name: 'Oleg',
    last_name: 'Tompson',
    email: 'ooooooo@senate.gov',
    gender: 'Kvir',
    ip_address: '444.179.4.666',
  },
];

const divideUsersBestAnswer = (userInfo) => {

  return userInfo.reduce((dividing, {first_name, last_name, gender, ...otherFields}) => {

      const userToPush = {
        fullName: `${first_name} ${last_name}`,
        gender,
        ...otherFields,
      };

      if (!dividing[gender]) {
        dividing[gender] = [];
      };

      dividing[gender].push(userToPush);

      return dividing;
  }, {} );
};

console.log(divideUsersBestAnswer(users));