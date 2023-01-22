//Функция принимает массив чисел. Функция должна вернуть число, которое встречается больше всего раз.

const findMostNumber = (nums) => {
    const amountMeeting = nums.reduce((amounts, num) => {
        if (!amounts.hasOwnProperty(num)) {
            amounts[num] = 1;
        } else {
            amounts[num] += 1;
        };
        return amounts;
    }, {});

    const entries = Object.entries(amountMeeting);

    entries.sort(( [prevKey, prevValue], [nextKey, nextValue] ) => nextValue - prevValue);

    return +entries[0][0];
};

console.log(findMostNumber([1,1,2,3]));
console.log(findMostNumber([1,2,3,4,2]));