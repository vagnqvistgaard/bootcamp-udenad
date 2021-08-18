// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	let medianNum = document.querySelector('#text-count');

	let numCount = 5;
	let minCount = 0;
	let maxCount = 10;

	function updatenumCount() {
		medianNum.innerHTML = parseInt(numCount);
	}

	function checkMinMax(t) {
		if (t.firstChild.data == '-') {
			if (numCount != minCount) {
				numCount--;
			}
		}
		if (t.firstChild.data == '+') {
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
		checkMinMax(e.target);
	});

});// Afslutter: DOMContentLoaded