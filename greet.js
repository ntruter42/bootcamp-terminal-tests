export default function greet(name) {
	if (typeof name !== 'string' || name.trim().length === 0) {
		return "Invalid input. Please provide a non-empty string.";
	}
	return "Hello, " + name.replace(/[,.]/g, '').trim();
} 