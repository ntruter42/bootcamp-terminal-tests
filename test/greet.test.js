
import assert from "assert";
import greet from "../greet.js";

describe('greet', function () {
	it('should return "Hello, Nicholas" when called with "Nicholas"', function () {
		assert.equal("Hello, Nicholas", greet("Nicholas"));
	});

	it('should return "Invalid input. Please provide a non-empty string." when called with ""', function () {
		assert.equal("Invalid input. Please provide a non-empty string.", greet(""));
	});

	it('should return "Invalid input. Please provide a non-empty string." when called with 123', function () {
		assert.equal("Invalid input. Please provide a non-empty string.", greet(123));
	});

	it('should return "Hello, Mary Poppins Jr" when called with "Mary Poppins, Jr."', function () {
		assert.equal("Hello, Mary Poppins Jr", greet("Mary Poppins, Jr."));
	});
});