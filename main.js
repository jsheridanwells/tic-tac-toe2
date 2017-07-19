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
		vals1 += this.title;
	} else {
		this.innerText = 'X';
		this.classList.add('red');
		vals2 += this.title;
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

	let toArr = str.split('');
	let sorted = toArr.sort().join('');
	let searchStrings = ['123','111', '222', '333'];
	let x = 0;

	for (let i = 0; i < searchStrings.length; i++) {
		x = sorted.search(searchStrings[i]);
		if (x !== -1) {
			display.innerText = `${winner} is the winner.`;
			button.className = 'shown';
			break;
		}
	}

}


for(let i = 0; i < cells.length; i++) {
	cells[i].addEventListener('click', getClick);
}

button.addEventListener('click', function() {
	location.reload();
});