export default function findItemsOver20(fruit) {
	var newFruit = [];
	for (var i in fruit) {
		if (fruit[i].qty > 20) {
			newFruit.push(fruit[i]);
		}
	}
	return newFruit;
}