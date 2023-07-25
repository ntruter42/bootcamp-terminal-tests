import assert from "assert";
import countRegNumber from "../functions/countRegNumber.js";

describe('countRegNumber', function () {
	it('should return 1 when called with "CA 123456"', function () {
		assert.equal(countRegNumber('CA 123456'), 1);
	});

	it('should return 3 when called with "CA 123456, CY 123456, CK 123456"', function () {
		assert.equal(countRegNumber('CA 123456, CY 123456, CK 123456'), 3);
	});

	it('should return 0 when called with ""', function () {
		assert.equal(countRegNumber(''), 0);
	});

	it('should return 2 when called with 123456', function () {
		assert.equal(countRegNumber(123456), 'Invalid input. Please provide a string.');
	});
});