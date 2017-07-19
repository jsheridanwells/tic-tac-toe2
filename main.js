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
		vals1 += this.id;
	} else {
		this.innerText = 'X';
		vals2 += this.id;
	}
	evaluateString(vals1, vals2);
}

function evaluateString() {
	if(vals1.length > 3) {
		vals1.shift();
	} else if (vals2.length > 3) {
		vals2.shift();
	}
	console.log(vals1, vals2);
}

//  when reset button is pressed
  //reset count
  //reset arrs
  //change all cells to #
  //clear display

for(let i = 0; i < cells.length; i++) {
	cells[i].addEventListener('click', getClick);
}



