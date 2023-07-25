export default function findItemsOver(fruit, threshold) {
	var newFruit = [];
	for (var i in fruit) {
		if (fruit[i].qty > threshold) {
			newFruit.push(fruit[i]);
		}
	}
	return newFruit;
}