export default function countAllFromTown(regList, loc) {
	regList = regList.split(',');
	var count = 0;
	for (var i = 0; i < regList.length; i++) {
		if (regList[i].trim().startsWith(loc)) {
			count++;
		}
	}
	return count;
}