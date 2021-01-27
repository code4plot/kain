export function emailOrderVars(order) {
  //order is an object returned by getOrder()
  //on wix element #thankYouPage
  
	//date formatting
	const date = new Date(order._dateCreated);
	//expires after 6 hours
	const expDate = getExpiry(date, 6);

  //variables used in 'orderEmail' template
	const vars = {
		first_name: order.buyerInfo.firstName,
		last_name: order.buyerInfo.lastName,
		order_total: order.totals.total.toFixed(2),
		order_number: order.number,
		order_date: dateToString(date),
		exp_date: dateToString(expDate)
		};
	return vars;
}

function dateToString(date) {
	//options for date formatting
	const time_zone = 'Asia/Singapore';
	const options = {
		timeZone: time_zone,
    	dateStyle: "medium",
		timeStyle: "short"
	};
	//console.log(date.toLocaleString("en-GB", options));
	return date.toLocaleString("en-GB", options);
}

function getExpiry(date, x) {
	//returns new date with expiry after x hours
	var expDate = new Date(date);
	expDate.setHours(expDate.getHours() + x);
	return expDate;
}
