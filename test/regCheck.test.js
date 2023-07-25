import assert from "assert";
import regCheck from "../functions/regCheck.js";

describe('regCheck', function () {
	it('should return "true" when called with "DC 55 YU GP" and "GP"', function () {
		assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
	});

	it('should return "true" when called with "5566 L" and "L"', function () {
		assert.equal(regCheck('5566 L', 'L'), true);
	});

	it('should return "false" when called with "ERT 123 EC" and "GP"', function () {
		assert.equal(regCheck('ERT 123 EC', 'GP'), false);
	});

	it('should return "false" when called with "FGT 123 MM" and "MP"', function () {
		assert.equal(regCheck('FGT 123 MM', 'MP'), false);
	});
});