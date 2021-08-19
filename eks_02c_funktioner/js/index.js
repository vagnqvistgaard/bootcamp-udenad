// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...
	let name = 'Somebody';
	let arr = ['ronda', 'harris'];

	var hilsen = bigGreeting(arr[0]);
	console.log(hilsen);


	function bigGreeting() {
		const streng = 'Hello there: Lunch is imminent,';
		return streng + ' ' + name;
		//return `${streng} ${arr[0]}`; //template literals
		//console.log(streng + ',' + arr[0]);
	}



}); // Afslutter: DOMContentLoaded