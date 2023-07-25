import assert from "assert";
import countAllPaarl from "../functions/countAllPaarl.js";

describe('countAllPaarl', function () {
	it('should return "3" when called with "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"', function () {
		assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 3);
	});

	it('should return "2" when called with "CJ 345 123, CK 345, CJ 123"', function () {
		assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123'), 2);
	});

	it('should return "1" when called with "CJ 345 123, G 2 3 4 5, CL 123-546, CK 345, CY 123"', function () {
		assert.equal(countAllPaarl('CJ 345 123, G 2 3 4 5, CL 123-546, CK 345, CY 123'), 1);
	});

	it('should return "0" when called with "C J 3 4 5 123, CK 345, .CJ. 123"', function () {
		assert.equal(countAllPaarl('C J 3 4 5 123, CK 345, ..CJ. 123'), 0);
	});
});