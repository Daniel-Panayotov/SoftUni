interface ticketInteface {
	destination: string;
	price: number;
	status: string;
}

function sortTickets(tickets: string[], criteria: string): ticketInteface[] {
	const filteredTickets = tickets.map(ticket => {
		const [destination, price, status] = ticket.split('|');

		return {
			destination,
			price: Number(price),
			status,
		};
	});

	filteredTickets.sort((a, b) => a[criteria].localeCompare(b[criteria]));

	return filteredTickets;
}

const result = sortTickets(
	[
		'Philadelphia|94.20|available',
		'New York City|95.99|available',
		'New York City|95.99|sold',
		'Boston|126.20|departed',
	],
	'destination',
);
