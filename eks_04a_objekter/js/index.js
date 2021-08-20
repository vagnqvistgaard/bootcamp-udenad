// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	let names = ['eeny', 'meeny', 'miney', 'moe'];

	/*function createList(array) {
		for (i = 0; i < array.length; i++) {
			var el = document.createElement("li");
			el.textContent = array[i];
			document.querySelector('#liste').appendChild(el);
		}
	}*/

	let createList = (array) => {
		array.forEach((navn) => {
			var el = document.createElement("li");
			el.textContent = `${navn}`;
			document.querySelector('#liste').appendChild(el);
		});
	}

	createList(names);

}); // Afslutter: DOMContentLoaded

// argument = at inwoking/calling  'doStuff(argument)'
// parameter = at definition  'function doStuff(parameter)';
// callback = function inwoked in another funcction 'calling/define? function inside eventlistener function';
// arrow functions 