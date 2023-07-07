function sortTickets(tickets, criteria) {
	var filteredTickets = tickets.map(function (ticket) {
		var _a = ticket.split('|'),
			destination = _a[0],
			price = _a[1],
			status = _a[2];
		return {
			destination: destination,
			price: Number(price),
			status: status,
		};
	});
	filteredTickets.sort(function (a, b) {
		return a[criteria].localeCompare(b[criteria]);
	});
	return filteredTickets;
}
var result = sortTickets(
	[
		'Philadelphia|94.20|available',
		'New York City|95.99|available',
		'New York City|95.99|sold',
		'Boston|126.20|departed',
	],
	'status',
);
console.log(result);
