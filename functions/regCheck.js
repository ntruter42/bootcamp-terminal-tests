export default function regCheck(regNum, loc) {
	if (typeof regNum !== 'string' || regNum.trim().length === 0 ||
		typeof loc !== 'string' || loc.trim().length === 0) {
		return "Invalid input. Please provide a non-empty string.";
	}
	return regNum.trim().endsWith(loc);
}