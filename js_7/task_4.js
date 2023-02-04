// Написать метод которые повторяет логику Object.fromEntries(). 
// { a: 1, b:2 }

const customFromEntries = (arrInArr) => {
    
    return arrInArr.reduce((result, [key, value]) => {
        result[key] = value;

        return result;
    }, {});
};

console.log(customFromEntries([["a", 1], ["b", 2]]));