import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('isWeekday', function () {
	it('should return "true" when called with "Monday"', function () {
		assert.equal(isWeekday('Monday'), true);
	});

	it('should return "true" when called with "Friday"', function () {
		assert.equal(isWeekday('Friday'), true);
	});

	it('should return "false" when called with "Saturday"', function () {
		assert.equal(isWeekday('Saturday'), false);
	});

	it('should return "false" when called with "Sunday"', function () {
		assert.equal(isWeekday('Sunday'), false);
	});
});