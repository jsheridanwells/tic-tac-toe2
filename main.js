//select elements
let cells = document.getElementsByClassName('cell');
let display = document.getElementById('display');
let button = document.getElementById('button');

//count number of clicks
let count = 0;

//create array1, array2 to hold click values
let arr1 = [];
let arr2 = [];

//capture user click
function getClick() {
	count++;
	if(count % 2 !== 0) {
		this.innerText = '0';
		arr1.push(this.id);
		console.log(arr1);
	} else {
		this.innerText = 'X';
		arr2.push(this.id);
		console.log(arr2);
	}
	showWinner(checkArrs(arr1),checkArrs(arr2),false);
}

function checkArrs(arr) {
	if (
		arr.sort() === [1, 2, 3] ||
		arr.sort() === [4, 5, 6] ||
		arr.sort() === [7, 8, 9] ||
		arr.sort() === [1, 4, 7] ||
		arr.sort() === [2, 5, 8] ||
		arr.sort() === [3, 6, 9] ||
		arr.sort() === [1, 5, 9] ||
		arr.sort() === [3, 5, 7]
		) {
		return true;
	}
}

function showWinner(player1, player2, tie) {
  if (player1) {
  	display.innerText = 'O is the winner.';
  } else if (player2) {
  	display.innerText = 'X is the winner.';
  } else if (tie) {
  	display.innerText = 'Tie Game.';
  }
}

//  when reset button is pressed
  //reset count
  //reset arrs
  //change all cells to #
  //clear display

for(let i = 0; i < cells.length; i++) {
	cells[i].addEventListener('click', getClick);
}


// STATUS:  Dom elements are working and logging
// id values to arrays, when arrays match, display
// is not changing.  


