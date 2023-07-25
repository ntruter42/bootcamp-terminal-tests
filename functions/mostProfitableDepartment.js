export default function mostProfitableDepartment(sales) {
	var departments = {};
	for (let i = 0; i < sales.length; i++) {
		if (departments[sales[i].department] === undefined) {
			departments[sales[i].department] = sales[i].sales;
		} else {
			departments[sales[i].department] += sales[i].sales;
		}
	}
	var most = { department: '', sales: 0 };
	for (var name in departments) {
		if (departments[name] > most.sales) {
			most.department = name;
			most.sales = departments[name];
		}
	}
	return most.department;
}