// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...


	function bigGreeting() {
		console.log('Hello there: Lunch is imminent!');
	}

	bigGreeting();

}); // Afslutter: DOMContentLoaded

//opret func kaldt 'hils', skriv 'hej med dig' i console
// kald funktiomen.
// gør det noget, om der kaldes før eller efter oprettelse? Nej...
// Der er tale om hoisting (og full load før aktivering);