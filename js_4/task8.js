// Написать свою реализацию метода массива filter (myFilter) которая работает точно так же как существующая.
// ВСЕ массивы должны иметь этот метод. Примеры ниже.

Array.prototype.myFilter = function (callback) {
	const result = [];

	for (let i = 0; i < this.length; i++) {
		const currentItem = this[i];

		const isRight = callback(currentItem, i, this);

		if (isRight) {
			result.push(currentItem);
		};
	};
	
	return result;
};

const numbers = [1,2,3];

console.log(numbers.myFilter((number) => number > 2));
console.log(numbers.myFilter((number) => number % 2 === 0));