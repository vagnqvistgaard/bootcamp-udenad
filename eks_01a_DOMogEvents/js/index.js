
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	let medianNum = document.querySelector('#text-count');
	let numCount = 5;

	function updatenumCount() {
		medianNum.innerHTML = parseInt(numCount);
	}

	updatenumCount();

	document.querySelector('#btn-count-decrease').addEventListener('click', () => {
		if (numCount > 0) {
			numCount--;
		}
	});

	document.querySelector('#btn-count-increase').addEventListener('click', () => {
		if (numCount < 10) {
			numCount++;
		}
	});

}); // Afslutter: DOMContentLoaded


/*
Opret en funktion som indsætter tallet 5 i p-tagget med id 'text-count'
klik plus = +1;
klik minus = -1;
ingen værdier >10 eller > 0;


*/