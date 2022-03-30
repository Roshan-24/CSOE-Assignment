let num;
let clickable = 1;
let seconds = 0;
let ms = 0;
let t;
let score;

let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

let numbers = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

shuffle(numbers);

function start() {
	timer();
	clickable = 1;
	document.getElementById('Score').innerHTML = '';
	document.getElementById('Start').style.visibility = 'hidden';
	document.getElementById('el1').innerHTML = numbers[0];
	document.getElementById('el2').innerHTML = numbers[1];
	document.getElementById('el3').innerHTML = numbers[2];
	document.getElementById('el4').innerHTML = numbers[3];
	document.getElementById('el5').innerHTML = numbers[4];
	document.getElementById('el6').innerHTML = numbers[5];
	document.getElementById('el7').innerHTML = numbers[6];
	document.getElementById('el8').innerHTML = numbers[7];
	document.getElementById('el9').innerHTML = numbers[8];
	document.getElementById('el10').innerHTML = numbers[9];
	document.getElementById('el11').innerHTML = numbers[10];
	document.getElementById('el12').innerHTML = numbers[11];
	document.getElementById('el13').innerHTML = numbers[12];
	document.getElementById('el14').innerHTML = numbers[13];
	document.getElementById('el15').innerHTML = numbers[14];
	document.getElementById('el16').innerHTML = numbers[15];
	document.getElementById('el17').innerHTML = numbers[16];
	document.getElementById('el18').innerHTML = numbers[17];
	document.getElementById('el19').innerHTML = numbers[18];
	document.getElementById('el20').innerHTML = numbers[19];
}

function plusTwenty(ID) {
	num = Number(document.getElementById(ID).textContent);
	if (clickable == num) {
		if (clickable > 20) {
			if (clickable == 40) {
				clearTimeout(t);
				score = Number(seconds + '.' + ms);
				storeScore();
				showScore();
				seconds = 0;
				ms = 0;
				document.getElementById('Time').innerHTML = '0.0';
				document.getElementById('Start').style.visibility = 'visible';
			}
			document.getElementById(ID).innerHTML = '';
			clickable++;
		} else {
			document.getElementById(ID).innerHTML = num + 20;
			clickable++;
		}
	}
}

function shuffle(arr) {
	let newPos;
	let temp;

	for (let i = arr.length - 1; i > 0; i--) {
		newPos = Math.floor(Math.random() * (i + 1));
		temp = arr[i];
		arr[i] = arr[newPos];
		arr[newPos] = temp;
	}
	return arr;
}

function timer() {
	t = setTimeout(update, 100);
}

function update() {
	ms++;
	if (ms == 10) {
		ms = 0;
		seconds++;
	}
	document.getElementById('Time').innerHTML = seconds + '.' + ms;

	timer();
}

function showScore() {
	highScores = JSON.parse(localStorage.getItem('highScores')) || [];
	document.getElementById('Score').innerHTML =
		'Your Time is ' + seconds + '.' + ms;
	showHS();
}

function storeScore() {
	highScores.push(score);
	highScores.sort(function (a, b) {
		return a - b;
	});
	highScores.splice(5);

	localStorage.setItem('highScores', JSON.stringify(highScores));
}

function showHS() {
	document.getElementById('hs1').innerHTML =
		highScores[0] == undefined ? ' ' : highScores[0];
	document.getElementById('hs2').innerHTML =
		highScores[1] == undefined ? ' ' : highScores[1];
	document.getElementById('hs3').innerHTML =
		highScores[2] == undefined ? ' ' : highScores[2];
	document.getElementById('hs4').innerHTML =
		highScores[3] == undefined ? ' ' : highScores[3];
	document.getElementById('hs5').innerHTML =
		highScores[4] == undefined ? ' ' : highScores[4];
}
