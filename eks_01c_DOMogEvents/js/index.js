// @ts-nocheck
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	let displayNum = document.querySelector('#text-count');

	let numCount = 5;
	let minCount = 0;
	let maxCount = 10;

	function updatenumCount() {
		displayNum.innerHTML = numCount.toString();
	}

	function checkMinMax(t) { //istf. firstChild.data: Lav dit eget dataset...!" > Christian
		if (t.firstChild.data == '-') { //solvable i one line w. logic && !!!!
			if (numCount != minCount) {
				numCount--;
			}
		}
		if (t.firstChild.data == '+') { //solvable in one line w. logic && !!!!
			if (numCount != maxCount) {
				numCount++;
			}
		}
		updatenumCount();
	}

	updatenumCount();

	document.querySelector('#btn-count-decrease').addEventListener('click', (e) => {
		checkMinMax(e.target);
	});

	document.querySelector('#btn-count-increase').addEventListener('click', (e) => {
		console.log(e.target);
		checkMinMax(e.target);
	});

});// Afslutter: DOMContentLoaded

/* også løst med at tjekke 'direction' sendt fra listeners:
	checkMinMax('increase')/ checkMinMax('decrease');

	if(direction === 'inc' && numCount != minCount , for eksempel..
	Kendt som 'Olivers Løsning´   */
