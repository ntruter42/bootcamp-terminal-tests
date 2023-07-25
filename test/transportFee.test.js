import assert from "assert";
import transportFee from "../functions/transportFee.js";

describe('transportFee', function () {
	it('should return "R20" when called with "morning"', function () {
		assert.equal(transportFee('morning'), 'R20');
	});

	it('should return "R10" when called with "afternoon"', function () {
		assert.equal(transportFee('afternoon'), 'R10');
	});

	it('should return "free" when called with "nigthshift"', function () {
		assert.equal(transportFee('nightshift'), 'free');
	});
});