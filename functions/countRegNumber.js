export default function countRegNumber(regList) {
	if (typeof regList !== 'string') {
		return "Invalid input. Please provide a string.";
	} else if (regList.trim().length === 0) {
		return 0;
	}
	return regList.split(',').length;
}