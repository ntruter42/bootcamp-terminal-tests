export default function isFromBellville(regNumber) {
	if (typeof regNumber !== 'string' || regNumber.trim().length === 0) {
		return "Invalid input. Please provide a non-empty string.";
	}
	return regNumber.trim().startsWith('CY');
}