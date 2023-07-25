import assert from "assert";
import countAllFromTown from "../functions/countAllFromTown.js";

describe('countAllFromTown', function () {
	it('should return "3" when called with "CL 124,CY 567,CL 345, CJ 456,CL 341" and "CL"', function () {
		assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'), 3);
	});

	it('should return "1" when called with "CJ 124,CY 567,CL 345, CF 456, CL 341" and "CF"', function () {
		assert.equal(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF'), 1);
	});

	it('should return "5" when called with "CL 124,CY 567,CL 345,     CL221-00, CL 456,CL 341" and "CL"', function () {
		assert.equal(countAllFromTown('CL 124,CY 567,CL 345,     CL221-00, CL 456,CL 341', 'CL'), 5);
	});

	it('should return "1" when called with "CJ 124,CY 567,CL 345, CF 456, L 341" and "L"', function () {
		assert.equal(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, L 341', 'L'), 1);
	});
});