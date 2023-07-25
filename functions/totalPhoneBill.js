export default function totalPhoneBill(rec) {
	var sms = 0;
	rec = rec.split(',');
	for (var i = 0; i < rec.length; i++) {
		if (rec[i].trim() == 'sms') {
			sms++;
		}
	}
	var amount = (sms * 0.65) + ((rec.length - sms) * 2.75)
	var result = 'R' + amount;
	var xtra = '0';
	if (result.endsWith('5')) {
		xtra = '';
	} // if it works, it works!
	return result + xtra;
}
