//select elements
let cells = document.getElementsByClassName('cell');
let display = document.getElementById('display');
let button = document.getElementById('button');

//count number of clicks
let count = 0;

//create vals1, vals2 to hold click values
let vals1 = '';
let vals2 = '';

//capture user click
function getClick() {
	count++
	if (count % 2 !== 0) {
		this.innerText = 'O';
		this.classList.add('blue');
		vals1 += this.id;
	} else {
		this.innerText = 'X';
		this.classList.add('red');
		vals2 += this.id;
	}
	evaluateString(vals1, 'O');
	evaluateString(vals2, 'X');
}

function stopClicks() {
	for(let i = 0; i < cells.length; i++) {
		cells[i].removeEventListener('click', getClick);
	}
}

function evaluateString(str, winner) {

	let toArr = str.split('');//string to array
	if (toArr.length > 3) {
		let shifted = toArr.shift();//remove oldest value
	}
	let sortedStr = toArr.sort().join('');//sort values, join
	console.log(sortedStr);
	if (								//compare
		sortedStr === '123' ||
		sortedStr === '456' ||
		sortedStr === '789' ||
		sortedStr === '147' ||
		sortedStr === '258' ||
		sortedStr === '369' ||
		sortedStr === '159' ||
		sortedStr === '357'

		) {
		button.className = 'shown';
		display.innerText = winner + ' is the winner.';
		stopClicks();
	} else if (count === 9) {
		button.className = 'shown';
		display.innerText = 'Tie Game.';
		stopClicks();
	}

}


for(let i = 0; i < cells.length; i++) {
	cells[i].addEventListener('click', getClick);
}

button.addEventListener('click', function() {
	location.reload();
});


