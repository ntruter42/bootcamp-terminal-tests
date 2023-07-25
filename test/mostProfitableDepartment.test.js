import assert from "assert";
import mostProfitableDepartment from "../mostProfitableDepartment.js";

describe('mostProfitableDepartment', function () {
	var salesData1 = [
		{ department: 'hardware', sales: 4500, day: 'Monday' },
		{ department: 'outdoor', sales: 1500, day: 'Monday' },
		{ department: 'carpentry', sales: 5500, day: 'Monday' },
		{ department: 'hardware', sales: 7500, day: 'Tuesday' },
		{ department: 'outdoor', sales: 2505, day: 'Tuesday' },
		{ department: 'carpentry', sales: 1540, day: 'Tuesday' },
		{ department: 'hardware', sales: 1500, day: 'Wednesday' },
		{ department: 'outdoor', sales: 8507, day: 'Wednesday' },
		{ department: 'carpentry', sales: 8009, day: 'Wednesday' },
		{ department: 'hardware', sales: 12000, day: 'Thursday' },
		{ department: 'outdoor', sales: 18007, day: 'Thursday' },
		{ department: 'carpentry', sales: 6109, day: 'Thursday' },
		{ department: 'hardware', sales: 7005, day: 'Friday' },
		{ department: 'outdoor', sales: 12006, day: 'Friday' },
		{ department: 'carpentry', sales: 16109, day: 'Friday' },
	];

	var salesData2 = [
		{ department: 'electronics', sales: 4500, day: 'Monday' },
		{ department: 'outdoor', sales: 1500, day: 'Monday' },
		{ department: 'carpentry', sales: 5500, day: 'Monday' },
		{ department: 'steelwork', sales: 7500, day: 'Tuesday' },
		{ department: 'outdoor', sales: 2505, day: 'Tuesday' },
		{ department: 'carpentry', sales: 1540, day: 'Tuesday' },
		{ department: 'hardware', sales: 1500, day: 'Wednesday' },
		{ department: 'outdoor', sales: 8507, day: 'Wednesday' },
		{ department: 'carpentry', sales: 8009, day: 'Wednesday' },
		{ department: 'hardware', sales: 12000, day: 'Thursday' },
		{ department: 'carpentry', sales: 6109, day: 'Thursday' },
		{ department: 'hardware', sales: 7005, day: 'Friday' },
		{ department: 'electronics', sales: 12006, day: 'Friday' },
		{ department: 'electronics', sales: 16109, day: 'Saturday' },
		{ department: 'steelwork', sales: 7500, day: 'Tuesday' },
		{ department: 'outdoor', sales: 2505, day: 'Tuesday' },
		{ department: 'carpentry', sales: 1540, day: 'Tuesday' },
		{ department: 'steelwork', sales: 1500, day: 'Wednesday' },
		{ department: 'carpentry', sales: 8009, day: 'Wednesday' },
	];

	var salesData3 = [
		{ department: 'furniture', sales: 3500, day: 'Monday' },
		{ department: 'garden', sales: 2500, day: 'Monday' },
		{ department: 'plumbing', sales: 6500, day: 'Monday' },
		{ department: 'furniture', sales: 8500, day: 'Tuesday' },
		{ department: 'garden', sales: 4505, day: 'Tuesday' },
		{ department: 'plumbing', sales: 1540, day: 'Tuesday' },
		{ department: 'furniture', sales: 2500, day: 'Wednesday' },
		{ department: 'garden', sales: 6507, day: 'Wednesday' },
		{ department: 'plumbing', sales: 5009, day: 'Wednesday' },
		{ department: 'furniture', sales: 9000, day: 'Thursday' },
		{ department: 'garden', sales: 12007, day: 'Thursday' },
		{ department: 'plumbing', sales: 6109, day: 'Thursday' },
		{ department: 'furniture', sales: 7005, day: 'Friday' },
		{ department: 'garden', sales: 10006, day: 'Friday' },
		{ department: 'plumbing', sales: 13109, day: 'Friday' },
	];


	it('should return "outdoor" when called with "salesData1"', function () {
		assert.equal(mostProfitableDepartment(salesData1), 'outdoor');
	});

	it('should return "electronics" when called with "salesData2"', function () {
		assert.equal(mostProfitableDepartment(salesData2), 'electronics');
	});

	it('should return "garden" when called with "salesData3"', function () {
		assert.equal(mostProfitableDepartment(salesData3), 'garden');
	});
});