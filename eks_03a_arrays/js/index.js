// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	let names = ['eeny', 'meeny', 'miney', 'moe'];

	for (i = 0; i < names.length; i++) {
		var el = document.createElement("LI");
		el.textContent = names[i];
		document.querySelector('#liste').appendChild(el);
	}






}); // Afslutter: DOMContentLoaded


/* var der indeholder array m. tre navne
loop for at udskrive  i ul-tag; husk li-tags om navnene */