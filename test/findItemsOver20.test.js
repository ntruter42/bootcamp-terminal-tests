import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js";

describe('findItemsOver20', function () {
	var itemList1 = [
		{ name: 'apples', qty: 10 },
		{ name: 'pears', qty: 37 },
		{ name: 'bananas', qty: 27 },
		{ name: 'apples', qty: 3 },
	];

	var results1 = [
		{ name: 'pears', qty: 37 },
		{ name: 'bananas', qty: 27 },
	];

	var itemList2 = [
		{ name: 'apples', qty: 10 },
		{ name: 'pears', qty: 19 },
		{ name: 'bananas', qty: 17 },
		{ name: 'apples', qty: 3 },
	];

	var results2 = [];

	var itemList3 = [
		{ name: 'apples', qty: 40 },
		{ name: 'pears', qty: 20 },
		{ name: 'bananas', qty: 23 },
		{ name: 'apples', qty: 37 }
	];

	var results3 = [
		{ name: 'apples', qty: 40 },
		{ name: 'bananas', qty: 23 },
		{ name: 'apples', qty: 37 }
	];

	it('should return "results1" when called with "itemList1"', function () {
		assert.deepEqual(findItemsOver20(itemList1), results1);
	});

	it('should return "results2" when called with "itemList2"', function () {
		assert.deepEqual(findItemsOver20(itemList2), results2);
	});

	it('should return "results3" when called with "itemList3"', function () {
		assert.deepEqual(findItemsOver20(itemList3), results3);
	});
});