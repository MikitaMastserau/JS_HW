// Написать свою реализацию метода массива map (myMap) которая работает точно так же как существующая.
// ВСЕ массивы должны иметь этот метод.

Array.prototype.myMap = function (callback) {
	const result = [];

	for (let i = 0; i < this.length; i++) {
		const currentItem = this[i];

		const nextItem = callback(currentItem, i, this);

		result.push(nextItem);
	};

	return result;
};

const numbers = [1,2,3];

console.log(numbers.myMap((number) => number * 2));
console.log(numbers.myMap((number) => String(number)));