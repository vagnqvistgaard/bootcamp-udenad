// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	let medianNum = document.querySelector('#text-count');

	let numCount = 5;
	let minCount = 0;
	let maxCount = 10;

	function updatenumCount() {
		medianNum.innerHTML = parseInt(numCount);
	}

	updatenumCount();

	document.querySelector('#btn-count-decrease').addEventListener('click', () => {
		if (numCount > minCount) {
			numCount--;
			updatenumCount();
		}
	});

	document.querySelector('#btn-count-increase').addEventListener('click', () => {
		if (numCount < maxCount) {
			numCount++;
			updatenumCount();
		}
	});

}); // Afslutter: DOMContentLoaded