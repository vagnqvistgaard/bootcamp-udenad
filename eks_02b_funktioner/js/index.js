// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...
	let name = 'Somebody';
	let arr = ['ronda', 'harris'];

	function bigGreeting() {
		const streng = 'Hello there: Lunch is imminent,';
		console.log(`${streng} ${arr[0]}`); //template literals
		console.log(streng + ',' + arr[0]);
	}

	bigGreeting();

}); // Afslutter: DOMContentLoaded


//tilføj parameter 'navn', tilføj til log: 'hej med dig,' + navn
// lav mellemrum efter komma....