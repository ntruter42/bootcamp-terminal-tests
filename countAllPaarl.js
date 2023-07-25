export default function countAllPaarl(regList) {
	regList = regList.split(',');
	var count = 0;
	for (var i = 0; i < regList.length; i++) {
		if (regList[i].trim().startsWith('CJ')) {
			count++;
		}
	}
	return count;
}