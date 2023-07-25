import assert from "assert";
import yearsAgo from "../functions/yearsAgo.js";

describe('yearsAgo', function () {
	it('should return "47" when called with "1976"', function () {
		assert.equal(yearsAgo('1976'), 47);
	});

	it('should return "23" when called with "2000"', function () {
		assert.equal(yearsAgo('2000'), 23);
	});

	it('should return "28" when called with "1995"', function () {
		assert.equal(yearsAgo('1995'), 28);
	});

	it('should return "-1" when called with "2024"', function () {
		assert.equal(yearsAgo('2024'), -1);
	});
});