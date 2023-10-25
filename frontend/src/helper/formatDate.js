export function formatDate(dateString) {
	const date = new Date(dateString);

	const months = [
		"enero",
		"febrero",
		"marzo",
		"abril",
		"mayo",
		"junio",
		"julio",
		"agosto",
		"septiembre",
		"octubre",
		"noviembre",
		"diciembre",
	];

	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();
	const hours = date.getHours();
	const minutes = date.getMinutes();

	return `${hours}:${minutes} |  ${months[monthIndex]} ${day} ${year}`;
}
