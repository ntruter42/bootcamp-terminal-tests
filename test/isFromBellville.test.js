import assert from "assert";
import isFromBellville from "../functions/isFromBellville.js";

describe('isFromBellville', function () {
	it('should return "true" when called with "CY 123456"', function () {
		assert.equal(isFromBellville('CY 123456'), true);
	});

	it('should return "false" when called with "CA 654321"', function () {
		assert.equal(isFromBellville('CA 654321'), false);
	});

	it('should return "true" when called with "   CY 246864   "', function () {
		assert.equal(isFromBellville('   CY 246864   '), true);
	});

	it('should return "Invalid input. Please provide a non-empty string." when called with 123456', function () {
		assert.equal(isFromBellville(123456), 'Invalid input. Please provide a non-empty string.');
	});
});